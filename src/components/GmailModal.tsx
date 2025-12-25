import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize2, Maximize2, Paperclip, Link, Smile, Image, Lock, Trash2, MoreVertical, Bold, Italic, Underline, AlignLeft } from 'lucide-react';

interface GmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    recipientEmail: string;
}

export const GmailModal = ({ isOpen, onClose, recipientEmail }: GmailModalProps) => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-end justify-end sm:items-center sm:justify-center pointer-events-none p-4 sm:p-0">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/20 pointer-events-auto"
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        className="w-full max-w-[500px] bg-white rounded-t-lg sm:rounded-lg shadow-2xl pointer-events-auto flex flex-col h-[500px] sm:h-[600px] md:mr-10 md:mb-0 mb-0 font-sans"
                        style={{ fontFamily: 'Arial, sans-serif' }} // Force generic sans-serif for Gmail look
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-[#F2F6FC] rounded-t-lg border-b border-gray-200">
                            <span className="text-sm font-medium text-gray-700">New Message</span>
                            <div className="flex items-center gap-2 text-gray-500">
                                <Minimize2 className="w-4 h-4 cursor-pointer hover:bg-gray-200 rounded p-0.5" />
                                <Maximize2 className="w-4 h-4 cursor-pointer hover:bg-gray-200 rounded p-0.5" />
                                <X
                                    className="w-4 h-4 cursor-pointer hover:bg-[#E04F5F] hover:text-white rounded p-0.5 transition-colors"
                                    onClick={onClose}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col bg-white">
                            {/* To */}
                            <div className="px-4 py-2 border-b border-gray-100 flex items-center">
                                <span className="text-gray-500 text-sm mr-2">To</span>
                                <input
                                    type="text"
                                    value={recipientEmail}
                                    readOnly
                                    className="flex-1 outline-none text-sm text-gray-800"
                                />
                                <div className="text-xs text-gray-500 flex gap-2">
                                    <span className="cursor-pointer hover:underline">Cc</span>
                                    <span className="cursor-pointer hover:underline">Bcc</span>
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="px-4 py-2 border-b border-gray-100">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full outline-none text-sm placeholder-gray-500"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            {/* Body */}
                            <div className="flex-1 p-4">
                                <textarea
                                    className="w-full h-full resize-none outline-none text-sm text-gray-800 font-sans"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </div>

                            {/* Footer / Toolbar */}
                            <div className="p-2 flex items-center justify-between border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handleSend}
                                        className="bg-[#0B57D0] hover:bg-[#094bb3] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
                                    >
                                        Send
                                    </button>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <span className="font-serif font-bold text-lg px-1 cursor-pointer hover:bg-gray-100 rounded">A</span>
                                        <span className=" px-1 cursor-pointer hover:bg-gray-100 rounded"><Underline className="w-4 h-4" /></span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-500">
                                    <Paperclip className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                                    <Link className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                                    <Smile className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                                    <Image className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                                    <Lock className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                                    <div className="h-4 w-[1px] bg-gray-300 mx-1" />
                                    <Trash2 className="w-4 h-4 cursor-pointer hover:text-gray-700" onClick={() => { setSubject(''); setBody(''); }} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
