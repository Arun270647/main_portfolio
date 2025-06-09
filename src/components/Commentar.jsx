import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { MessageCircle, UserCircle2, Loader2, AlertCircle, Send, ImagePlus, X } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

// Static comments data
const staticComments = [
  {
    id: 1,
    name: "Marina Digitals",
    comment: "",
    timestamp: "2024-03-15T10:30:00Z"
  },
  {
    id: 2,
    name: "CP Sports",
    comment: "Impressive projects and clean code structure.",
    timestamp: "2024-03-14T15:45:00Z"
  },
  {
    id: 3,
    name: "Selva's Art haus",
    comment: "The UI/UX is really well thought out.",
    timestamp: "2024-03-13T09:15:00Z"
  }
];

const Comment = memo(({ comment, formatDate, index }) => (
    <div 
        className="px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5"
        
    >
        <div className="flex items-start gap-3 ">
            {comment.profileImage ? (
                <img
                    src={comment.profileImage}
                    alt={`${comment.userName}'s profile`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
                    loading="lazy"
                />
            ) : (
                <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                    <UserCircle2 className="w-5 h-5" />
                </div>
            )}
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="font-medium text-white truncate">{comment.userName}</h4>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                        {formatDate(comment.createdAt)}
                    </span>
                </div>
                <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">{comment.content}</p>
            </div>
        </div>
    </div>
));

const CommentForm = memo(({ onSubmit, isSubmitting, error }) => {
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) return;
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    }, []);

    const handleTextareaChange = useCallback((e) => {
        setNewComment(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!newComment.trim() || !userName.trim()) return;
        
        onSubmit({ newComment, userName, imageFile });
        setNewComment('');
        setImagePreview(null);
        setImageFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }, [newComment, userName, imageFile, onSubmit]);

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2" data-aos="fade-up" data-aos-duration="1000">
                <label className="block text-sm font-medium text-white">
                    Name <span className="text-red-400">*</span>
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}z
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                />
            </div>

            <div className="space-y-2" data-aos="fade-up" data-aos-duration="1200">
                <label className="block text-sm font-medium text-white">
                    Message <span className="text-red-400">*</span>
                </label>
                <textarea
                    ref={textareaRef}
                    value={newComment}
                    onChange={handleTextareaChange}
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]"
                    required
                />
            </div>

            <div className="space-y-2" data-aos="fade-up" data-aos-duration="1400">
                <label className="block text-sm font-medium text-white">
                    Profile Photo <span className="text-gray-400">(optional)</span>
                </label>
                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    {imagePreview ? (
                        <div className="flex items-center gap-4">
                            <img
                                src={imagePreview}
                                alt="Profile preview"
                                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/50"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setImagePreview(null);
                                    setImageFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all group"
                            >
                                <X className="w-4 h-4" />
                                <span>Remove Photo</span>
                            </button>
                        </div>
                    ) : (
                        <div className="w-full" >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-all border border-dashed border-indigo-500/50 hover:border-indigo-500 group"
                            >
                                <ImagePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Choose Profile Photo</span>
                            </button>
                            <p className="text-center text-gray-400 text-sm mt-2">
                                Max file size: 5MB
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                data-aos="fade-up" data-aos-duration="1000"
                className="relative w-full h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Posting...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            <span>Post Comment</span>
                        </>
                    )}
                </div>
            </button>
        </form>
    );
});

const Commentar = () => {
    const [comments, setComments] = useState(staticComments);
    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const commentsEndRef = useRef(null);

    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);

    const scrollToBottom = () => {
        commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [comments]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !newComment.trim()) {
            setError('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            // Simulate adding a new comment
            const newCommentObj = {
                id: comments.length + 1,
                name: name.trim(),
                comment: newComment.trim(),
                timestamp: new Date().toISOString()
            };

            setComments(prev => [...prev, newCommentObj]);
            setNewComment('');
            setName('');
        } catch (error) {
            setError('Failed to add comment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">Comments</h2>
                </div>

                <div className="space-y-6">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10"
                            data-aos="fade-up"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <UserCircle2 className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-white">{comment.name}</h3>
                                        <span className="text-sm text-gray-400">
                                            {formatDate(comment.timestamp)}
                                        </span>
                                    </div>
                                    <p className="text-gray-300">{comment.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={commentsEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    {error && (
                        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                            <AlertCircle className="w-5 h-5" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="space-y-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write your comment..."
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Posting...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>Post Comment</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default memo(Commentar);