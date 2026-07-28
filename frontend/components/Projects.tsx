import React from 'react';
import { FolderGit2 } from 'lucide-react';

const projectsData = [
    {
        title: 'DevOps AI Dashboard',
        desc: 'A React-based DevOps Engineer Dashboard with Gemini AI integration for quick drafting and runbook generation.',
        date: '26/10/2023',
        team: ['https://picsum.photos/40/40?random=14'],
        tags: ['React', 'Tailwind CSS', 'Gemini AI', 'TypeScript'],
        progress: 100,
        price: 'Personal'
    },
    {
        title: 'Kubernetes on AWS',
        desc: 'Production-style Kubernetes cluster deployment using kubeadm and Terraform.',
        date: '15/10/2023',
        team: ['https://picsum.photos/40/40?random=1', 'https://picsum.photos/40/40?random=2'],
        tags: ['Programming', 'Design', 'Hosting', 'Marketing'],
        progress: 100,
        price: '$2500'
    },
    {
        title: 'Terraform AWS Infra',
        desc: 'VPC, NAT Gateway, ALB, and Auto Scaling group setup.',
        date: '15/10/2023',
        team: ['https://picsum.photos/40/40?random=3', 'https://picsum.photos/40/40?random=4', 'https://picsum.photos/40/40?random=5'],
        tags: ['Programming', 'Design', 'Hosting', 'Marketing'],
        progress: 100,
        price: '$2500'
    },
    {
        title: 'Linux Automation',
        desc: 'Ansible playbooks for server configuration and hardening.',
        date: '15/10/2023',
        team: ['https://picsum.photos/40/40?random=6', 'https://picsum.photos/40/40?random=7'],
        tags: ['Programming', 'Design', 'Hosting', 'Marketing'],
        progress: 100,
        price: '$2500'
    },
    {
        title: 'Monitoring Stack',
        desc: 'Prometheus and Grafana setup for cluster observability.',
        date: '15/10/2023',
        team: ['https://picsum.photos/40/40?random=8', 'https://picsum.photos/40/40?random=9'],
        tags: ['Programming', 'Design', 'Hosting', 'Marketing'],
        progress: 60,
        price: '$2500'
    },
    {
        title: 'CI/CD Pipeline',
        desc: 'GitHub Actions workflows for automated testing and deployment.',
        date: '15/10/2023',
        team: ['https://picsum.photos/40/40?random=10', 'https://picsum.photos/40/40?random=11'],
        tags: ['Programming', 'Design', 'Hosting', 'Marketing'],
        progress: 40,
        price: '$2500'
    },
    {
        title: 'Docker Multi-Service',
        desc: 'Docker Compose setup for a multi-tier web application.',
        date: '15/10/2023',
        team: ['https://picsum.photos/40/40?random=12', 'https://picsum.photos/40/40?random=13'],
        tags: ['Programming', 'Design', 'Hosting', 'Marketing'],
        progress: 100,
        price: '$2500'
    }
];

const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col relative">
        <span className="absolute top-4 right-4 text-xs text-gray-500">{project.date}</span>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-6 flex-1">{project.desc}</p>
        
        <div className="flex items-center mb-6">
            {project.team.map((img: string, i: number) => (
                <img key={i} src={img} alt="Team member" className={`w-10 h-10 rounded-full border-2 border-white ${i !== 0 ? '-ml-3' : ''}`} />
            ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6 border-t border-b border-gray-50 py-4">
            {project.tags.map((tag: string, i: number) => (
                <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{tag}</span>
            ))}
        </div>
        
        <div className="flex items-center justify-between">
            <div className="w-1/2">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                        className={`h-full rounded-full ${project.progress === 100 ? 'bg-green-500' : project.progress > 50 ? 'bg-blue-500' : 'bg-red-500'}`} 
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>
            <span className="font-bold text-gray-500 text-sm">{project.price}</span>
        </div>
    </div>
);

export const Projects = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <FolderGit2 className="text-blue-600" size={32} />
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projectsData.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </div>
    );
};
