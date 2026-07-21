import React from 'react';
import { LayoutDashboard, Settings, User, FolderGit2, GraduationCap, Users, FileText, CreditCard } from 'lucide-react';

interface SidebarProps {
    currentView: string;
    setCurrentView: (view: string) => void;
}

const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'learning', icon: GraduationCap, label: 'Learning' },
    { id: 'network', icon: Users, label: 'Network' },
    { id: 'files', icon: FileText, label: 'Files' },
    { id: 'skills', icon: CreditCard, label: 'Skills Plan' },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0 h-full">
            <div className="p-6 text-center border-b border-gray-100">
                <h3 className="text-2xl font-bold tracking-tight text-gray-800">Yaseen</h3>
            </div>
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentView(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            currentView === item.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};
