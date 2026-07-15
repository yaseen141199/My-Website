import React from 'react';
import { Search, Bell, Mail } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Type A Keyword"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-gray-50"
                />
            </div>
            <div className="flex items-center gap-5 ml-4">
                <button className="text-gray-500 hover:text-blue-600 transition-colors relative">
                    <Bell size={22} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Mail size={22} />
                </button>
                <img src="https://picsum.photos/40/40" alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-200 cursor-pointer hover:border-blue-500 transition-colors" />
            </div>
        </header>
    );
};
