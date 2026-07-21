import React from 'react';
import { User, Star, Cloud, Server, Box, Terminal, GitMerge } from 'lucide-react';

const Toggle = ({ defaultChecked = false }: { defaultChecked?: boolean }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
);

const InfoRow = ({ title, data, defaultChecked }: { title: string, data: { label: string, value: string }[], defaultChecked?: boolean }) => (
    <div className="p-6 border-b border-gray-100 last:border-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
        <div className="flex-1 w-full">
            <h4 className="text-gray-500 font-medium mb-4">{title}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                        <span className="text-gray-500 min-w-[80px]">{item.label}:</span>
                        <span className="text-gray-800 font-medium truncate">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
        <Toggle defaultChecked={defaultChecked} />
    </div>
);

const SkillTag = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap">
        {children}
    </span>
);

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
    <div className="mb-4 last:mb-0">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">{title}</h5>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <SkillTag key={idx}>{skill}</SkillTag>
            ))}
        </div>
    </div>
);

const ActivityRow = ({ icon, title, time, desc, date, color }: any) => (
    <div className="flex items-start gap-4 pb-6 mb-6 border-b border-gray-50 last:border-0 last:pb-0 last:mb-0">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-white ${color}`}>
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
                <span className="text-xs text-gray-500">{time}</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 truncate pr-4">{desc}</p>
                <span className="text-xs text-gray-400 shrink-0">{date}</span>
            </div>
        </div>
    </div>
);

export const Profile = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <User className="text-blue-600" size={32} />
                Profile
            </h1>

            <div className="flex flex-col gap-6">
                {/* Top Info Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
                    {/* Personal Avatar Area */}
                    <div className="p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 w-full lg:w-1/3 bg-gray-50/50">
                        <img src="https://picsum.photos/120/120" alt="Yaseen Ahmed" className="w-32 h-32 rounded-full border-4 border-white shadow-sm mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Yaseen Ahmed</h3>
                        <p className="text-gray-500 text-sm mb-6">DevOps Engineer</p>
                        
                        <div className="w-full max-w-[200px] mb-6">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                        
                        <span className="text-xs text-gray-500 font-medium">Sohag University — 2025</span>
                    </div>

                    {/* Detailed Info Area */}
                    <div className="flex-1 flex flex-col w-full">
                        <InfoRow 
                            title="General Information" 
                            defaultChecked={true}
                            data={[
                                { label: 'Full Name', value: 'Yaseen Ahmed' },
                                { label: 'Gender', value: 'Male' },
                                { label: 'Country', value: 'Egypt' }
                            ]} 
                        />
                        <InfoRow 
                            title="Personal Information" 
                            data={[
                                { label: 'Email', value: 'yacinahmed141@gmail.com' },
                                { label: 'GitHub', value: 'yaseen141199' },
                                { label: 'Education', value: 'Telecommunications & Electronics Engineer' }
                            ]} 
                        />
                        <InfoRow 
                            title="Job Information" 
                            data={[
                                { label: 'Title', value: 'DevOps Engineer' },
                                { label: 'Focus', value: 'Cloud & Infrastructure' },
                                { label: 'Objective', value: 'Cloud / DevOps Engineer Role' }
                            ]} 
                        />
                        <InfoRow 
                            title="Certifications & Learning" 
                            data={[
                                { label: 'Linux', value: 'RH124, RH134, RH254' },
                                { label: 'Networking', value: 'CCNA, CCNP' },
                                { label: 'Currently', value: 'Advanced K8s, GitOps, Argo CD' }
                            ]} 
                        />
                    </div>
                </div>

                {/* Bottom Section: Skills & Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Skills */}
                    <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-h-[800px] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-2 text-gray-800 sticky top-0 bg-white pb-2 border-b border-gray-100 z-10">Technical Skills</h2>
                        
                        <div className="flex flex-col gap-4 mt-4">
                            <SkillCategory 
                                title="☁ Cloud" 
                                skills={['AWS', 'EC2', 'IAM', 'VPC', 'S3', 'Application Load Balancer', 'Auto Scaling']} 
                            />
                            <SkillCategory 
                                title="⚙ DevOps" 
                                skills={['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'Terraform']} 
                            />
                            <SkillCategory 
                                title="🐧 Linux Administration" 
                                skills={['Red Hat Enterprise Linux', 'RH124', 'RH134', 'RH254', 'Administration', 'Users & Groups', 'Permissions', 'File Systems', 'Storage Management', 'LVM', 'Process Management', 'System Services', 'Networking', 'SELinux', 'Firewalld', 'Performance Tuning', 'Troubleshooting']} 
                            />
                            <SkillCategory 
                                title="🤖 Automation" 
                                skills={['Ansible', 'Ansible Playbooks', 'Ansible Navigator', 'Roles', 'Variables', 'Loops', 'Handlers', 'Configuration Management']} 
                            />
                            <SkillCategory 
                                title="🐳 Containers" 
                                skills={['Docker', 'Docker Compose', 'Docker Swarm', 'Container Networking', 'Volumes', 'Multi-Service Deployment']} 
                            />
                            <SkillCategory 
                                title="☸ Kubernetes" 
                                skills={['Kubernetes', 'Pods', 'ReplicaSets', 'Deployments', 'Services', 'kubeadm', 'Scaling', 'Rolling Updates', 'Cluster Administration']} 
                            />
                            <SkillCategory 
                                title="📊 Monitoring & Observability" 
                                skills={['Prometheus', 'Grafana', 'Metrics Collection', 'Dashboard Creation', 'Infrastructure Monitoring', 'Alerting Fundamentals']} 
                            />
                            <SkillCategory 
                                title="🌐 Networking" 
                                skills={['CCNA', 'CCNP', 'TCP/IP', 'OSPF', 'EIGRP', 'BGP', 'VLAN', 'STP', 'MPLS', 'ACL', 'VPN', 'FortiGate']} 
                            />
                            <SkillCategory 
                                title="💻 Windows Administration" 
                                skills={['Windows Server 2016', 'Windows Server 2019', 'Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'Group Policy']} 
                            />
                            <SkillCategory 
                                title="💻 Programming & Scripting" 
                                skills={['Bash', 'Python', 'YAML', 'JSON']} 
                            />
                            <SkillCategory 
                                title="🛠 Tools" 
                                skills={['VMware Workstation', 'EVE-NG', 'GNS3', 'Wireshark', 'Cisco Packet Tracer', 'Helm', 'Nginx', 'Apache', 'VSFTPD', 'Samba', 'Git Flow']} 
                            />
                        </div>
                    </div>

                    {/* Activities */}
                    <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold mb-2 text-gray-800">Latest Activities</h2>
                        <p className="text-gray-500 text-sm mb-6">Recent DevOps lab work</p>
                        
                        <div className="flex flex-col">
                            <ActivityRow 
                                icon={<Cloud size={24} />} 
                                color="bg-orange-500"
                                title="AWS Lab" 
                                time="14:30" 
                                desc="Provisioned VPC with Terraform" 
                                date="Yesterday" 
                            />
                            <ActivityRow 
                                icon={<Box size={24} />} 
                                color="bg-blue-500"
                                title="Kubernetes" 
                                time="11:15" 
                                desc="Deployed app with rolling updates" 
                                date="Yesterday" 
                            />
                            <ActivityRow 
                                icon={<GitMerge size={24} />} 
                                color="bg-gray-800"
                                title="CI/CD" 
                                time="09:00" 
                                desc="Configured GitHub Actions pipeline" 
                                date="2 Days Ago" 
                            />
                            <ActivityRow 
                                icon={<Terminal size={24} />} 
                                color="bg-red-500"
                                title="Ansible" 
                                time="16:45" 
                                desc="Automated firewalld and packages on RHEL" 
                                date="3 Days Ago" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
