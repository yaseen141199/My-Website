import React from 'react';
import { GraduationCap, Users, CheckCircle, Clock, Circle } from 'lucide-react';

const courses = [
    { title: 'AWS Certified Solutions Architect', desc: 'Master AWS cloud architecture and services.', cover: 'https://picsum.photos/400/200?random=1', avatar: 'https://picsum.photos/50/50?random=1', students: '1.2K', status: 'Completed' },
    { title: 'Kubernetes for Beginners', desc: 'Learn container orchestration from scratch.', cover: 'https://picsum.photos/400/200?random=2', avatar: 'https://picsum.photos/50/50?random=2', students: '850', status: 'In Progress' },
    { title: 'Terraform Masterclass', desc: 'Infrastructure as Code with HashiCorp Terraform.', cover: 'https://picsum.photos/400/200?random=3', avatar: 'https://picsum.photos/50/50?random=3', students: '2.1K', status: 'Completed' },
    { title: 'Ansible Automation', desc: 'Automate your IT infrastructure with Ansible.', cover: 'https://picsum.photos/400/200?random=4', avatar: 'https://picsum.photos/50/50?random=4', students: '920', status: 'Not Started' },
    { title: 'Prometheus & Grafana', desc: 'Monitoring and observability stack setup.', cover: 'https://picsum.photos/400/200?random=5', avatar: 'https://picsum.photos/50/50?random=5', students: '500', status: 'In Progress' },
    { title: 'CI/CD with GitHub Actions', desc: 'Build automated pipelines for your apps.', cover: 'https://picsum.photos/400/200?random=6', avatar: 'https://picsum.photos/50/50?random=6', students: '1.5K', status: 'Completed' },
];

const CourseCard = ({ course }: { course: any }) => {
    const getStatusIcon = () => {
        if (course.status === 'Completed') return <CheckCircle size={16} className="text-green-500" />;
        if (course.status === 'In Progress') return <Clock size={16} className="text-blue-500" />;
        return <Circle size={16} className="text-gray-400" />;
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="relative h-40">
                <img src={course.cover} alt={course.title} className="w-full h-full object-cover" />
                <img src={course.avatar} alt="Instructor" className="absolute -bottom-6 left-6 w-12 h-12 rounded-full border-4 border-white shadow-sm" />
            </div>
            <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">{course.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                        <Users size={16} />
                        {course.students}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                        {getStatusIcon()}
                        {course.status}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Learning = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <GraduationCap className="text-blue-600" size={32} />
                Learning & Certifications
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, idx) => (
                    <CourseCard key={idx} course={course} />
                ))}
            </div>
        </div>
    );
};
