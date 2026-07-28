import React from 'react';
import { CreditCard, Check, X, Info } from 'lucide-react';

const plansData = [
    {
        name: 'Free Tier',
        price: '0.00',
        color: 'bg-green-500',
        textColor: 'text-green-500',
        features: [
            { name: 'Access Basic Tutorials', included: true },
            { name: 'Community Forum Access', included: true },
            { name: 'Public GitHub Repos', included: true },
            { name: '1 Basic K8s Cluster (Local)', included: false },
            { name: 'AWS Sandbox Environment', included: false },
            { name: 'Advanced CI/CD Templates', included: false },
            { name: '1-on-1 Mentorship', included: false },
            { name: 'Certification Vouchers', included: false },
            { name: 'Priority Support', included: false },
        ],
        buttonText: 'Current Plan',
        isCurrent: true
    },
    {
        name: 'Pro Engineer',
        price: '19.99',
        color: 'bg-blue-600',
        textColor: 'text-blue-600',
        features: [
            { name: 'Access Basic Tutorials', included: true },
            { name: 'Community Forum Access', included: true },
            { name: 'Public GitHub Repos', included: true },
            { name: '1 Basic K8s Cluster (Local)', included: true },
            { name: 'AWS Sandbox Environment', included: true },
            { name: 'Advanced CI/CD Templates', included: true },
            { name: '1-on-1 Mentorship', included: false },
            { name: 'Certification Vouchers', included: false },
            { name: 'Priority Support', included: false },
        ],
        buttonText: 'Upgrade to Pro',
        isCurrent: false
    },
    {
        name: 'Enterprise Architect',
        price: '49.99',
        color: 'bg-orange-500',
        textColor: 'text-orange-500',
        features: [
            { name: 'Access Basic Tutorials', included: true },
            { name: 'Community Forum Access', included: true },
            { name: 'Public GitHub Repos', included: true },
            { name: '1 Basic K8s Cluster (Local)', included: true },
            { name: 'AWS Sandbox Environment', included: true },
            { name: 'Advanced CI/CD Templates', included: true },
            { name: '1-on-1 Mentorship', included: true },
            { name: 'Certification Vouchers', included: true },
            { name: 'Priority Support', included: true },
        ],
        buttonText: 'Contact Sales',
        isCurrent: false
    }
];

const PlanCard = ({ plan }: { plan: any }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className={`${plan.color} text-white text-center p-8 relative`}>
            <h2 className="text-2xl font-bold m-0">{plan.name}</h2>
            <div className="mt-4 flex items-start justify-center">
                <span className="text-xl mt-1 mr-1">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-sm mt-auto mb-1 ml-1 opacity-80">/mo</span>
            </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature: any, idx: number) => (
                    <li key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                            {feature.included ? (
                                <Check size={18} className="text-green-500 shrink-0" />
                            ) : (
                                <X size={18} className="text-red-500 shrink-0" />
                            )}
                            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                                {feature.name}
                            </span>
                        </div>
                        <Info size={14} className="text-gray-300 cursor-help hover:text-gray-500 transition-colors" />
                    </li>
                ))}
            </ul>
            
            <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.isCurrent 
                        ? 'bg-gray-100 text-gray-500 cursor-default' 
                        : `${plan.color} text-white hover:opacity-90`
                }`}
            >
                {plan.buttonText}
            </button>
        </div>
    </div>
);

export const Plans = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                <CreditCard className="text-blue-600" size={32} />
                Skills & Lab Plans
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plansData.map((plan, idx) => (
                    <PlanCard key={idx} plan={plan} />
                ))}
            </div>
        </div>
    );
};
