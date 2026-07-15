import React from 'react';
import { 
    FileText, Download, FileCode, Terminal, FileJson, 
    Database, UploadCloud, FileArchive, File as FileIcon 
} from 'lucide-react';

const filesData = [
    { name: 'k8s-production-cluster.yaml', uploader: 'Yaseen', date: '20/10/2023', size: '12KB', type: 'yaml' },
    { name: 'main.tf', uploader: 'Yaseen', date: '18/10/2023', size: '4KB', type: 'terraform' },
    { name: 'deploy-pipeline.sh', uploader: 'Admin', date: '15/10/2023', size: '2KB', type: 'script' },
    { name: 'nginx-ingress.conf', uploader: 'Yaseen', date: '10/10/2023', size: '1KB', type: 'config' },
    { name: 'aws-architecture-v2.pdf', uploader: 'Design Team', date: '05/10/2023', size: '2.4MB', type: 'doc' },
    { name: 'docker-compose.yml', uploader: 'Yaseen', date: '01/10/2023', size: '3KB', type: 'yaml' },
    { name: 'ansible-inventory.ini', uploader: 'Admin', date: '28/09/2023', size: '1.5KB', type: 'config' },
    { name: 'db-backup-script.py', uploader: 'Yaseen', date: '25/09/2023', size: '5KB', type: 'script' },
];

const getFileIcon = (type: string) => {
    switch (type) {
        case 'yaml': return <FileJson size={48} className="text-blue-500 mb-4" />;
        case 'terraform': return <FileCode size={48} className="text-purple-500 mb-4" />;
        case 'script': return <Terminal size={48} className="text-green-500 mb-4" />;
        case 'config': return <Database size={48} className="text-orange-500 mb-4" />;
        case 'doc': return <FileText size={48} className="text-red-500 mb-4" />;
        default: return <FileIcon size={48} className="text-gray-500 mb-4" />;
    }
};

const FileCard = ({ file }: { file: any }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow group">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100">
            <Download size={18} />
        </button>
        
        <div className="flex flex-col items-center text-center mt-4 mb-2">
            {getFileIcon(file.type)}
            <h3 className="font-bold text-gray-800 text-sm mb-1 truncate w-full px-2" title={file.name}>
                {file.name}
            </h3>
        </div>
        
        <span className="block text-center text-xs text-gray-500 font-medium mb-4">
            {file.uploader}
        </span>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-xs text-gray-500">
            <span>{file.date}</span>
            <span>{file.size}</span>
        </div>
    </div>
);

const StatRow = ({ icon, title, count, size, colorClass, bgClass }: any) => (
    <div className="flex items-center p-3 border border-gray-100 rounded-lg mb-3 last:mb-0">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${bgClass} ${colorClass} mr-4`}>
            {icon}
        </div>
        <div className="flex-1 flex justify-between items-center">
            <div>
                <span className="block text-sm font-bold text-gray-800 mb-1">{title}</span>
                <span className="block text-xs text-gray-500">{count} Files</span>
            </div>
            <span className="text-sm font-medium text-gray-500">{size}</span>
        </div>
    </div>
);

export const Files = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <FileArchive className="text-blue-600" size={32} />
                Infrastructure Files
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Files Grid */}
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filesData.map((file, idx) => (
                            <FileCard key={idx} file={file} />
                        ))}
                    </div>
                </div>

                {/* Statistics Sidebar */}
                <div className="w-full lg:w-80 bg-white rounded-xl p-6 shadow-sm border border-gray-100 shrink-0">
                    <h2 className="text-xl font-bold mb-6 text-gray-800">Files Statistics</h2>
                    
                    <div className="flex flex-col mb-6">
                        <StatRow 
                            icon={<FileJson size={20} />} 
                            title="YAML / JSON" 
                            count="145" 
                            size="2.5 MB" 
                            colorClass="text-blue-600" 
                            bgClass="bg-blue-50" 
                        />
                        <StatRow 
                            icon={<FileCode size={20} />} 
                            title="Terraform (IaC)" 
                            count="82" 
                            size="1.2 MB" 
                            colorClass="text-purple-600" 
                            bgClass="bg-purple-50" 
                        />
                        <StatRow 
                            icon={<Terminal size={20} />} 
                            title="Shell Scripts" 
                            count="56" 
                            size="850 KB" 
                            colorClass="text-green-600" 
                            bgClass="bg-green-50" 
                        />
                        <StatRow 
                            icon={<FileText size={20} />} 
                            title="Documentation" 
                            count="24" 
                            size="45 MB" 
                            colorClass="text-red-600" 
                            bgClass="bg-red-50" 
                        />
                    </div>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        <UploadCloud size={18} />
                        Upload File
                    </button>
                </div>
            </div>
        </div>
    );
};
