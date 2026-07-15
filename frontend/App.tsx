import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Network } from './components/Network';
import { Learning } from './components/Learning';
import { Projects } from './components/Projects';
import { Profile } from './components/Profile';
import { Settings } from './components/Settings';
import { Files } from './components/Files';
import { Plans } from './components/Plans';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState('dashboard');

    return (
        <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
            <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    {currentView === 'dashboard' && <Dashboard />}
                    {currentView === 'settings' && <Settings />}
                    {currentView === 'profile' && <Profile />}
                    {currentView === 'network' && <Network />}
                    {currentView === 'learning' && <Learning />}
                    {currentView === 'projects' && <Projects />}
                    {currentView === 'files' && <Files />}
                    {currentView === 'skills' && <Plans />}
                    {/* Fallback for other views */}
                    {currentView !== 'dashboard' && currentView !== 'settings' && currentView !== 'profile' && currentView !== 'network' && currentView !== 'learning' && currentView !== 'projects' && currentView !== 'files' && currentView !== 'skills' && (
                        <div className="p-6 flex items-center justify-center h-full text-gray-500">
                            <p>This section is under construction.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
