import React, { useState } from 'react';
import {
    Cloud, Box, Server, List, Loader2, CheckCircle, XSquare,
    FileText, Heart, MessageSquare, Globe, Code, Mail, Sparkles, GitBranch, Link
} from 'lucide-react';
import { generateContentStream } from '../services/geminiService';
import { DEFAULT_CONFIG } from '../constants';

const WelcomeWidget = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <div className="bg-gray-100 p-5 flex justify-between items-center h-32">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
                <p className="text-gray-500 mt-1">yaseen141199</p>
            </div>
        </div>
        <div className="px-5 pb-5 relative">
            <img src="https://picsum.photos/100/100" alt="Avatar" className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 shadow-sm bg-white" />
            <div className="flex flex-col md:flex-row text-center md:text-left mt-14 mb-6 justify-around border-t border-b border-gray-100 py-4">
                <div><span className="block font-bold text-gray-800">Yaseen Ahmed</span><span className="text-sm text-gray-500 mt-1 block">DevOps Engineer</span></div>
                <div><span className="block font-bold text-gray-800">8</span><span className="text-sm text-gray-500 mt-1 block">Projects</span></div>
                <div><span className="block font-bold text-gray-800">2025</span><span className="text-sm text-gray-500 mt-1 block">Graduated</span></div>
            </div>
            <button className="block w-full md:w-auto md:ml-auto bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                View Profile
            </button>
        </div>
    </div>
);

const QuickDraftWidget = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!title) return;
        setIsGenerating(true);
        setBody('');
        try {
            await generateContentStream({
                messages: [{ id: '1', role: 'user', text: `Write a short, concise DevOps runbook or draft notes for: ${title}` }],
                config: DEFAULT_CONFIG,
                onChunk: (text) => setBody(prev => prev + text),
                onComplete: () => setIsGenerating(false),
                onError: (err) => { console.error(err); setIsGenerating(false); }
            });
        } catch (e) {
            setIsGenerating(false);
        }
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-xl font-bold mb-1 text-gray-800">Quick Draft</h2>
            <p className="text-gray-500 text-sm mb-5">Document infrastructure ideas or runbook notes</p>
            <form className="flex flex-col gap-4 flex-1">
                <input
                    type="text"
                    placeholder="Title (e.g., Setup Redis Cluster)"
                    className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <div className="relative flex-1 flex flex-col">
                    <textarea
                        placeholder="Your thoughts..."
                        className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none flex-1 min-h-[120px] resize-none transition-all"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating || !title}
                        className="absolute bottom-3 right-3 p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 disabled:opacity-50 transition-colors"
                        title="Generate with AI"
                    >
                        {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                    </button>
                </div>
                <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded-md w-fit hover:bg-blue-700 transition-colors font-medium text-sm">
                    Save Draft
                </button>
            </form>
        </div>
    );
};

const TargetRow = ({ icon, title, subtitle, progress, color, bg }: any) => (
    <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${bg}`}>
            {icon}
        </div>
        <div className="flex-1">
            <span className="block text-sm text-gray-500">{title}</span>
            <span className="block font-bold text-gray-800 mb-2">{subtitle}</span>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full relative`} style={{ width: `${progress}%` }}>
                    <span className={`absolute -top-6 right-0 text-xs font-bold ${color.replace('bg-', 'text-')}`}>{progress}%</span>
                </div>
            </div>
        </div>
    </div>
);

const TargetsWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-1 text-gray-800">Yearly Targets</h2>
        <p className="text-gray-500 text-sm mb-6">DevOps & Cloud learning goals for 2025</p>
        <div className="flex flex-col gap-6 mt-4">
            <TargetRow icon={<Cloud className="text-blue-600" size={20} />} title="AWS Certifications" subtitle="3 Tracks" progress={80} color="bg-blue-500" bg="bg-blue-50" />
            <TargetRow icon={<Box className="text-orange-600" size={20} />} title="Kubernetes Labs" subtitle="12 Clusters" progress={55} color="bg-orange-500" bg="bg-orange-50" />
            <TargetRow icon={<Server className="text-green-600" size={20} />} title="Linux Automation" subtitle="25 Playbooks" progress={75} color="bg-green-500" bg="bg-green-50" />
        </div>
    </div>
);

const StatBox = ({ icon, value, label }: any) => (
    <div className="border border-gray-100 rounded-lg p-4 flex flex-col items-center justify-center text-center">
        <div className="mb-2">{icon}</div>
        <span className="text-2xl font-bold text-gray-800 mb-1">{value}</span>
        <span className="text-xs text-gray-500 font-medium">{label}</span>
    </div>
);

const StatsWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-1 text-gray-800">Infrastructure Tasks</h2>
        <p className="text-gray-500 text-sm mb-6">DevOps tickets and automation requests</p>
        <div className="grid grid-cols-2 gap-4">
            <StatBox icon={<List className="text-orange-500" size={28} />} value="48" label="Total" />
            <StatBox icon={<Loader2 className="text-blue-500" size={28} />} value="12" label="In Progress" />
            <StatBox icon={<CheckCircle className="text-green-500" size={28} />} value="32" label="Completed" />
            <StatBox icon={<XSquare className="text-red-500" size={28} />} value="4" label="Blocked" />
        </div>
    </div>
);

const UpdateRow = ({ img, title, desc, time }: any) => (
    <div className="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
        <img src={img} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
        <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 text-sm truncate">{title}</h3>
            <p className="text-xs text-gray-500 truncate mt-1">{desc}</p>
        </div>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded shrink-0">{time}</span>
    </div>
);

const UpdatesWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Latest Updates</h2>
        <div className="flex flex-col gap-4">
            <UpdateRow img="https://picsum.photos/100/100?random=1" title="K8s Cluster on AWS" desc="Deployed kubeadm cluster with Terraform VPC" time="3 Days Ago" />
            <UpdateRow img="https://picsum.photos/100/100?random=2" title="Terraform AWS Stack" desc="VPC, NAT Gateway, ALB, and Auto Scaling" time="5 Days Ago" />
            <UpdateRow img="https://picsum.photos/100/100?random=3" title="Monitoring Stack Live" desc="Prometheus + Grafana dashboards configured" time="7 Days Ago" />
            <UpdateRow img="https://picsum.photos/100/100?random=4" title="CI/CD Pipeline Added" desc="GitHub Actions build and deploy automation" time="9 Days Ago" />
        </div>
    </div>
);

const SkillRow = ({ name, level }: any) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-medium">{level}</span>
    </div>
);

const SkillsWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Top Skills Focus</h2>
        <div className="flex flex-col">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider pb-3 border-b border-gray-100">
                <span>Skill</span><span>Focus Level</span>
            </div>
            <SkillRow name="Kubernetes" level="High" />
            <SkillRow name="Terraform" level="High" />
            <SkillRow name="AWS" level="High" />
            <SkillRow name="Ansible" level="Medium" />
            <SkillRow name="Prometheus" level="Medium" />
            <SkillRow name="GitOps" level="Growing" />
        </div>
    </div>
);

const FileRow = ({ icon, name, author, size }: any) => (
    <div className="flex items-center gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
        <div className="w-10 h-10 rounded bg-gray-50 flex items-center justify-center shrink-0">
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-800 text-sm truncate">{name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{author}</p>
        </div>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded shrink-0">{size}</span>
    </div>
);

const FilesWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Infrastructure Files</h2>
        <div className="flex flex-col gap-3">
            <FileRow icon={<FileText className="text-blue-500" size={20} />} name="k8s-deployment.yaml" author="Yaseen" size="4.2kb" />
            <FileRow icon={<FileText className="text-purple-500" size={20} />} name="main.tf" author="Terraform" size="8.1kb" />
            <FileRow icon={<FileText className="text-red-500" size={20} />} name="site.yml" author="Ansible" size="2.3kb" />
            <FileRow icon={<FileText className="text-yellow-500" size={20} />} name="docker-stack.zip" author="Docker" size="1.5mb" />
            <FileRow icon={<FileText className="text-green-500" size={20} />} name="aws-architecture.pdf" author="Docs" size="320kb" />
            <FileRow icon={<FileText className="text-orange-500" size={20} />} name="prometheus.yml" author="Monitoring" size="1.8kb" />
        </div>
    </div>
);

const ProgressStep = ({ text, status }: { text: string, status: 'done' | 'current' | 'pending' }) => {
    const isDone = status === 'done';
    const isCurrent = status === 'current';
    return (
        <li className="relative pl-10 flex items-center min-h-[32px]">
            <span className={`absolute left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white z-10
            ${isDone ? 'border-blue-500 bg-blue-500' : isCurrent ? 'border-blue-500' : 'border-gray-300'}`}>
                {isDone && <CheckCircle size={14} className="text-white" />}
            </span>
            <span className={`font-medium text-sm ${isDone ? 'text-gray-800' : isCurrent ? 'text-blue-600' : 'text-gray-400'}`}>
                {text}
            </span>
        </li>
    );
};

const ProgressWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
        <h2 className="text-xl font-bold mb-8 text-gray-800">K8s on AWS — Progress</h2>
        <ul className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-500">
            <ProgressStep text="Terraform VPC & Networking" status="done" />
            <ProgressStep text="EC2 Instances Provisioned" status="done" />
            <ProgressStep text="kubeadm Cluster Initialized" status="done" />
            <ProgressStep text="Configure ALB & Auto Scaling" status="current" />
            <ProgressStep text="Production Documentation" status="pending" />
        </ul>
        <Cloud className="absolute -bottom-4 -right-4 text-gray-50 w-32 h-32 -z-10" />
    </div>
);

const ReminderRow = ({ title, time, color }: any) => (
    <li className={`pl-4 border-l-4 ${color}`}>
        <h3 className="font-bold text-sm text-gray-800">{title}</h3>
        <span className="text-xs text-gray-500 mt-1 block">{time}</span>
    </li>
);

const RemindersWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Reminders</h2>
        <ul className="space-y-5">
            <ReminderRow title="Review Ansible Playbooks" time="15/07/2025 — 10:00am" color="border-blue-500" />
            <ReminderRow title="Test K8s Rolling Updates" time="18/07/2025 — 2:00pm" color="border-green-500" />
            <ReminderRow title="Update Grafana Dashboards" time="22/07/2025 — 11:00am" color="border-orange-500" />
            <ReminderRow title="Study Argo CD GitOps" time="01/08/2025 — 9:00am" color="border-red-500" />
        </ul>
    </div>
);

const PostWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Latest Post</h2>
        <div className="flex items-center gap-4 mb-4">
            <img src="https://picsum.photos/50/50" alt="Avatar" className="w-12 h-12 rounded-full" />
            <div>
                <h3 className="font-bold text-gray-800">Yaseen Ahmed</h3>
                <span className="text-xs text-gray-500">About 3 Hours Ago</span>
            </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-5 pb-5 border-b border-gray-100 flex-1">
            Automate everything that can be automated, document everything that can be documented, and never stop learning.
        </p>
        <div className="flex justify-between text-gray-500">
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors text-sm font-medium"><Heart size={18} /> 1.2K</button>
            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors text-sm font-medium"><MessageSquare size={18} /> 86</button>
        </div>
    </div>
);

const ConnectRow = ({ icon, name, action, color }: any) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded flex items-center justify-center text-white ${color}`}>
                {React.cloneElement(icon, { size: 16 })}
            </div>
            <span className="font-medium text-sm text-gray-800">{name}</span>
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-xs font-medium transition-colors">
            {action}
        </button>
    </div>
);

const ConnectWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Connect</h2>
        <div className="space-y-3">
            <ConnectRow icon={<Globe />} name="Website" action="Visit" color="bg-blue-600" />
            <ConnectRow icon={<GitBranch />} name="Git Repo" action="Follow" color="bg-gray-800" />
            <ConnectRow icon={<Mail />} name="Email" action="Contact" color="bg-red-500" />
            <ConnectRow icon={<Cloud />} name="Cloud Portfolio" action="View" color="bg-blue-400" />
        </div>
    </div>
);

const ProjectRow = ({ name, date, type, stack, status, statusColor }: any) => (
    <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
        <td className="p-4 font-medium text-gray-800 text-sm">{name}</td>
        <td className="p-4 text-sm text-gray-500">{date}</td>
        <td className="p-4 text-sm text-gray-600">{type}</td>
        <td className="p-4 text-sm text-gray-600">{stack}</td>
        <td className="p-4">
            <span className={`${statusColor} text-white px-2.5 py-1 rounded text-xs font-medium`}>{status}</span>
        </td>
    </tr>
);

const ProjectsWidget = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 col-span-1 md:col-span-2 xl:col-span-3 overflow-x-auto">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Featured Projects</h2>
        <table className="w-full text-left min-w-[800px]">
            <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold rounded-l-lg">Name</th>
                    <th className="p-4 font-bold">Date</th>
                    <th className="p-4 font-bold">Type</th>
                    <th className="p-4 font-bold">Stack</th>
                    <th className="p-4 font-bold rounded-r-lg">Status</th>
                </tr>
            </thead>
            <tbody>
                <ProjectRow name="Kubernetes on AWS" date="Jan 2025" type="Personal Lab" stack="Production-style" status="Completed" statusColor="bg-green-500" />
                <ProjectRow name="Terraform AWS Infra" date="Dec 2024" type="Personal Lab" stack="IaC" status="Completed" statusColor="bg-green-500" />
                <ProjectRow name="Linux Automation" date="Nov 2024" type="Personal Lab" stack="Ansible" status="Completed" statusColor="bg-green-500" />
                <ProjectRow name="Monitoring Stack" date="Oct 2024" type="Personal Lab" stack="Observability" status="In Progress" statusColor="bg-blue-500" />
                <ProjectRow name="CI/CD Pipeline" date="Sep 2024" type="GitHub Actions" stack="Pipeline" status="In Progress" statusColor="bg-blue-500" />
                <ProjectRow name="Docker Multi-Service" date="Aug 2024" type="Personal Lab" stack="Containers" status="Completed" statusColor="bg-green-500" />
            </tbody>
        </table>
    </div>
);

export const Dashboard = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <Server className="text-blue-600" size={32} />
                Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <WelcomeWidget />
                <QuickDraftWidget />
                <TargetsWidget />
                <StatsWidget />
                <UpdatesWidget />
                <SkillsWidget />
                <FilesWidget />
                <ProgressWidget />
                <RemindersWidget />
                <PostWidget />
                <ConnectWidget />
                <ProjectsWidget />
            </div>
        </div>
    );
};
