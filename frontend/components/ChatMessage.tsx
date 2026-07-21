import React from 'react';
import { Message } from '../types';
import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex gap-4 p-4 rounded-lg ${isUser ? 'bg-google-dark' : 'bg-google-panel border border-google-border'}`}>
            <div className="shrink-0 mt-1">
                {isUser ? (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <User size={18} />
                    </div>
                ) : (
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                        <Bot size={18} />
                    </div>
                )}
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="font-medium text-sm text-google-textSecondary mb-1">
                    {isUser ? 'User' : 'Model'}
                </div>
                <div className="prose prose-invert max-w-none text-sm text-google-text">
                    {message.text ? (
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                    ) : (
                        <span className="animate-pulse text-google-textSecondary">Generating...</span>
                    )}
                </div>
            </div>
        </div>
    );
};
