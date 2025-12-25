import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_SEQUENCE = [
    'BIOS CHECK... OK',
    'LOADING KERNEL...',
    'INITIALIZING MEMORY... 8192KB OK',
    'MOUNTING FILESYSTEM...',
    'LOADING USER PROFILE...',
    'WELCOME TO ARUN_OS',
    '',
];

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const [bootIndex, setBootIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (bootIndex < BOOT_SEQUENCE.length) {
            const timer = setTimeout(() => {
                setBootIndex(prev => prev + 1);
            }, 350);
            return () => clearTimeout(timer);
        } else {
            // Boot sequence complete, start exit animation
            const exitTimer = setTimeout(() => {
                setIsExiting(true);
            }, 500);
            return () => clearTimeout(exitTimer);
        }
    }, [bootIndex]);

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
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {/* Retro grid background */}
                    <div className="absolute inset-0 retro-grid opacity-30" />

                    {/* Boot terminal */}
                    <motion.div
                        className="terminal-window w-[90%] max-w-2xl mx-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="pt-10 p-4 md:p-6 font-terminal text-sm md:text-base min-h-[280px]">
                            {BOOT_SEQUENCE.slice(0, bootIndex).map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${i === bootIndex - 1 ? 'text-primary' : 'text-muted-foreground'}`}
                                >
                                    <span className="text-primary mr-2">{'>'}</span>
                                    {line}
                                </motion.div>
                            ))}
                            {bootIndex < BOOT_SEQUENCE.length && (
                                <span className="typing-cursor text-primary" />
                            )}

                            {/* Progress bar */}
                            {bootIndex >= BOOT_SEQUENCE.length && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-primary">{'>'}</span>
                                        <span className="text-primary">SYSTEM READY</span>
                                    </div>
                                    <motion.div
                                        className="mt-3 h-2 bg-border overflow-hidden"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                    >
                                        <motion.div
                                            className="h-full bg-primary"
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

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
