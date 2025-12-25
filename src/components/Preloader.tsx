import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsExiting(true), 500);
                    return 100;
                }
                return next;
            });
        }, 20); // 20ms * 100 = 2000ms duration

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (isExiting) {
            const completeTimer = setTimeout(() => {
                onComplete();
            }, 600);
            return () => clearTimeout(completeTimer);
        }
    }, [isExiting, onComplete]);

    return (
        <AnimatePresence>
            {!isExiting ? (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {/* Retro grid background */}
                    <div className="absolute inset-0 retro-grid opacity-30" />

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        {/* Circular Loader */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                            {/* Outer rotating ring */}
                            <motion.div
                                className="absolute inset-0 border-4 border-dashed border-primary/30 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner rotating ring (counter-clockwise) */}
                            <motion.div
                                className="absolute inset-4 border-2 border-dotted border-primary/50 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Progress Ring */}
                            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="45%"
                                    className="stroke-muted fill-none stroke-[2]"
                                />
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="45%"
                                    className="stroke-primary fill-none stroke-[3]"
                                    strokeDasharray="283" // 2 * pi * 45 (approx radius % for 100x100 coord system is roughly 45) -> actually need pixel calc or percent. 
                                    // simpler: just draw arc
                                    strokeDashoffset={283 - (283 * progress) / 100}
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Center Percentage */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-pixel text-xl md:text-2xl text-primary text-glow">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </div>

                        {/* Loading Text */}
                        <div className="text-center space-y-2">
                            <motion.div
                                className="font-pixel text-lg md:text-xl text-primary text-glow"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                SYSTEM LOADING
                            </motion.div>
                            <div className="font-terminal text-xs text-muted-foreground">
                                ESTIMATING TIME REMAINING...
                            </div>
                        </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-8 left-4 md:left-8 text-muted-foreground/40 font-terminal text-[10px] md:text-xs">
                        <pre className="leading-tight">{`┌──────────────┐
│ SYSTEM_BOOT  │
│ v1.0.0       │
└──────────────┘`}</pre>
                    </div>

                    <div className="absolute bottom-8 right-4 md:right-8 text-muted-foreground/40 font-terminal text-[10px] md:text-xs text-right">
                        <pre className="leading-tight">{`┌──────────────┐
│ ARUN_OS      │
│ LOADING...   │
└──────────────┘`}</pre>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};
