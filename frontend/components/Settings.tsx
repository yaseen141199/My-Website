import React, { useState } from 'react';
import { Settings as SettingsIcon, Server, GitBranch, Link, Mail, Cloud } from 'lucide-react';

const Toggle = ({ id, defaultChecked = false, label }: { id: string, defaultChecked?: boolean, label?: string }) => (
    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id={id} className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        {label && <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>}
    </label>
);

const Radio = ({ id, name, label, defaultChecked = false }: { id: string, name: string, label: string, defaultChecked?: boolean }) => (
    <div className="flex items-center mb-4">
        <input id={id} type="radio" name={name} defaultChecked={defaultChecked} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
        <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-700">{label}</label>
    </div>
);

const ServerRadio = ({ id, name, label, defaultChecked = false }: { id: string, name: string, label: string, defaultChecked?: boolean }) => (
    <div className="flex-1">
        <input type="radio" id={id} name={name} className="peer hidden" defaultChecked={defaultChecked} />
        <label htmlFor={id} className="flex flex-col items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-50 transition-all">
            <Server className="mb-2" size={24} />
            <div className="w-full text-sm font-semibold text-center">{label}</div>
        </label>
    </div>
);

export const Settings = () => {
    const [firstName, setFirstName] = useState('Yaseen');
    const [lastName, setLastName] = useState('Ahmed');
    const [email, setEmail] = useState('yacinahmed141@gmail.com');

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <SettingsIcon className="text-blue-600" size={32} />
                Settings
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Site Control */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Site Control</h2>
                    <p className="text-gray-500 text-sm mb-6">Control The Website If There Is Maintenance</p>
                    
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="font-medium text-gray-800">Website Control</h3>
                            <p className="text-sm text-gray-500">Open/Close Website And Type The Reason</p>
                        </div>
                        <Toggle id="site-control" defaultChecked={true} />
                    </div>
                    <textarea 
                        placeholder="Close message content" 
                        className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none min-h-[100px]"
                    ></textarea>
                </div>

                {/* General Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">General Info</h2>
                    <p className="text-gray-500 text-sm mb-6">General Information About Your Account</p>
                    
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-2.5 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-2.5 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="flex gap-3">
                                <input 
                                    type="email" 
                                    value={email}
                                    disabled
                                    className="w-full p-2.5 rounded-md bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed"
                                />
                                <button type="button" className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-md transition-colors whitespace-nowrap">
                                    Change
                                </button>
                            </div>
                        </div>
                        <button type="button" className="mt-2 bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors w-fit">
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* Security Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Security Info</h2>
                    <p className="text-gray-500 text-sm mb-6">Security Information About Your Account</p>
                    
                    <div className="flex items-center justify-between py-4 border-b border-gray-50">
                        <div>
                            <h3 className="font-medium text-gray-800">Password</h3>
                            <p className="text-sm text-gray-500">Last Change On 25/10/2021</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                            Change
                        </button>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-gray-50">
                        <div>
                            <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-500">Enable/Disable The Feature</p>
                        </div>
                        <Toggle id="two-fa" defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <h3 className="font-medium text-gray-800">Devices</h3>
                            <p className="text-sm text-gray-500">Check The Login Devices List</p>
                        </div>
                        <button className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                            Devices
                        </button>
                    </div>
                </div>

                {/* Social Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Social Info</h2>
                    <p className="text-gray-500 text-sm mb-6">Social Media Information</p>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                            <div className="p-3 text-gray-500 bg-gray-100 border-r border-gray-200">
                                <GitBranch size={18} />
                            </div>
                            <input type="text" defaultValue="yaseen141199" placeholder="GitHub Username" className="w-full p-2.5 bg-transparent outline-none text-sm" />
                        </div>
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                            <div className="p-3 text-gray-500 bg-gray-100 border-r border-gray-200">
                                <Link size={18} />
                            </div>
                            <input type="text" placeholder="LinkedIn Username" className="w-full p-2.5 bg-transparent outline-none text-sm" />
                        </div>
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                            <div className="p-3 text-gray-500 bg-gray-100 border-r border-gray-200">
                                <Mail size={18} />
                            </div>
                            <input type="text" defaultValue="yacinahmed141@gmail.com" placeholder="Email Address" className="w-full p-2.5 bg-transparent outline-none text-sm" />
                        </div>
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                            <div className="p-3 text-gray-500 bg-gray-100 border-r border-gray-200">
                                <Cloud size={18} />
                            </div>
                            <input type="text" placeholder="Cloud Portfolio URL" className="w-full p-2.5 bg-transparent outline-none text-sm" />
                        </div>
                    </div>
                </div>

                {/* Widgets Control */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Widgets Control</h2>
                    <p className="text-gray-500 text-sm mb-6">Show/Hide Widgets</p>
                    
                    <div className="flex flex-col gap-1">
                        <Toggle id="w-quick-draft" label="Quick Draft" defaultChecked={true} />
                        <Toggle id="w-targets" label="Yearly Targets" defaultChecked={true} />
                        <Toggle id="w-tasks" label="Infrastructure Tasks" defaultChecked={true} />
                        <Toggle id="w-updates" label="Latest Updates" defaultChecked={true} />
                        <Toggle id="w-latest-tasks" label="Latest Tasks" defaultChecked={true} />
                        <Toggle id="w-skills" label="Top Skills Focus" defaultChecked={true} />
                    </div>
                </div>

                {/* Backup Manager */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Backup Manager</h2>
                    <p className="text-gray-500 text-sm mb-6">Control Backup Time And Location</p>
                    
                    <div className="mb-8">
                        <Radio id="daily" name="backup-time" label="Daily" defaultChecked={true} />
                        <Radio id="weekly" name="backup-time" label="Weekly" />
                        <Radio id="monthly" name="backup-time" label="Monthly" />
                    </div>
                    
                    <div className="flex gap-4">
                        <ServerRadio id="server-zero" name="backup-server" label="Zero" />
                        <ServerRadio id="server-megaman" name="backup-server" label="Megaman" defaultChecked={true} />
                        <ServerRadio id="server-sigma" name="backup-server" label="Sigma" />
                    </div>
                </div>
            </div>
        </div>
    );
};
