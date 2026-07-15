import React from 'react';
import { Phone, Mail, Users } from 'lucide-react';

const connections = [
    { name: 'Ahmed Ali', role: 'Cloud Architect', projects: 15, articles: 12, avatar: 'https://picsum.photos/100/100?random=10' },
    { name: 'Sara Smith', role: 'SRE', projects: 8, articles: 5, avatar: 'https://picsum.photos/100/100?random=11' },
    { name: 'John Doe', role: 'DevOps Engineer', projects: 22, articles: 3, avatar: 'https://picsum.photos/100/100?random=12' },
    { name: 'Mona Lisa', role: 'Platform Engineer', projects: 11, articles: 8, avatar: 'https://picsum.photos/100/100?random=13' },
    { name: 'Tom Hardy', role: 'Security Engineer', projects: 9, articles: 15, avatar: 'https://picsum.photos/100/100?random=14' },
    { name: 'Emma Watson', role: 'Release Manager', projects: 30, articles: 2, avatar: 'https://picsum.photos/100/100?random=15' },
];

const ConnectionCard = ({ conn }: { conn: any }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative flex flex-col items-center">
        <div className="absolute top-4 left-4 flex gap-2">
            <button className="p-2 bg-gray-50 text-gray-500 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Phone size={16} />
            </button>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-gray-50 text-gray-500 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Mail size={16} />
            </button>
        </div>
        
        <img src={conn.avatar} alt={conn.name} className="w-24 h-24 rounded-full border-4 border-gray-50 mb-4 mt-4" />
        <h3 className="text-lg font-bold text-gray-800">{conn.name}</h3>
        <p className="text-sm text-gray-500 mb-6">{conn.role}</p>
        
        <div className="flex gap-4 w-full border-t border-b border-gray-50 py-4 mb-6 justify-center">
            <div className="text-center px-2">
                <span className="block font-bold text-gray-800">{conn.projects}</span>
                <span className="text-xs text-gray-500">Projects</span>
            </div>
            <div className="text-center px-2 border-l border-gray-50">
                <span className="block font-bold text-gray-800">{conn.articles}</span>
                <span className="text-xs text-gray-500">Articles</span>
            </div>
        </div>
        
        <div className="flex gap-2 w-full">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Profile
            </button>
            <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-md text-sm font-medium hover:bg-red-100 transition-colors">
                Remove
            </button>
        </div>
    </div>
);

export const Network = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <Users className="text-blue-600" size={32} />
                Network Connections
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connections.map((conn, idx) => (
                    <ConnectionCard key={idx} conn={conn} />
                ))}
            </div>
        </div>
    );
};
