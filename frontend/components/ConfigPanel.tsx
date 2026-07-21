import React from 'react';
import { ModelConfig } from '../types';
import { AVAILABLE_MODELS } from '../constants';
import { Info } from 'lucide-react';

interface ConfigPanelProps {
    config: ModelConfig;
    setConfig: React.Dispatch<React.SetStateAction<ModelConfig>>;
}

export const ConfigPanel: React.FC<ConfigPanelProps> = ({ config, setConfig }) => {
    const handleChange = (key: keyof ModelConfig, value: number | string) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-80 bg-google-panel border-l border-google-border flex flex-col h-full shrink-0 overflow-y-auto">
            <div className="p-4 border-b border-google-border">
                <h2 className="text-lg font-medium text-google-text">Configuration</h2>
            </div>
            
            <div className="p-4 space-y-6">
                {/* Model Selection */}
                <div className="space-y-2">
                    <label className="flex items-center justify-between text-sm font-medium text-google-text">
                        Model
                        <Info size={14} className="text-google-textSecondary cursor-help" />
                    </label>
                    <select 
                        value={config.model}
                        onChange={(e) => handleChange('model', e.target.value)}
                        className="w-full bg-google-dark border border-google-border rounded-md px-3 py-2 text-sm text-google-text focus:outline-none focus:border-google-blue appearance-none"
                    >
                        {AVAILABLE_MODELS.map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                    </select>
                </div>

                {/* Temperature */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium text-google-text">
                        <label className="flex items-center gap-1">
                            Temperature
                            <Info size={14} className="text-google-textSecondary cursor-help" />
                        </label>
                        <span className="text-google-textSecondary bg-google-dark px-2 py-0.5 rounded text-xs border border-google-border">
                            {config.temperature.toFixed(2)}
                        </span>
                    </div>
                    <input 
                        type="range" 
                        min="0" max="2" step="0.05"
                        value={config.temperature}
                        onChange={(e) => handleChange('temperature', parseFloat(e.target.value))}
                        className="w-full accent-google-blue h-1 bg-google-border rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-google-textSecondary">
                        <span>0</span>
                        <span>2</span>
                    </div>
                </div>

                {/* Token Limit */}
                <div className="space-y-2">
                    <label className="flex items-center justify-between text-sm font-medium text-google-text">
                        Output token limit
                        <Info size={14} className="text-google-textSecondary cursor-help" />
                    </label>
                    <input 
                        type="number" 
                        value={config.maxOutputTokens}
                        onChange={(e) => handleChange('maxOutputTokens', parseInt(e.target.value, 10))}
                        className="w-full bg-google-dark border border-google-border rounded-md px-3 py-2 text-sm text-google-text focus:outline-none focus:border-google-blue"
                    />
                </div>

                {/* Top-K */}
                <div className="space-y-2">
                    <label className="flex items-center justify-between text-sm font-medium text-google-text">
                        Top-K
                        <Info size={14} className="text-google-textSecondary cursor-help" />
                    </label>
                    <input 
                        type="number" 
                        value={config.topK}
                        onChange={(e) => handleChange('topK', parseInt(e.target.value, 10))}
                        className="w-full bg-google-dark border border-google-border rounded-md px-3 py-2 text-sm text-google-text focus:outline-none focus:border-google-blue"
                    />
                </div>

                {/* Top-P */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium text-google-text">
                        <label className="flex items-center gap-1">
                            Top-P
                            <Info size={14} className="text-google-textSecondary cursor-help" />
                        </label>
                        <span className="text-google-textSecondary bg-google-dark px-2 py-0.5 rounded text-xs border border-google-border">
                            {config.topP.toFixed(2)}
                        </span>
                    </div>
                    <input 
                        type="range" 
                        min="0" max="1" step="0.01"
                        value={config.topP}
                        onChange={(e) => handleChange('topP', parseFloat(e.target.value))}
                        className="w-full accent-google-blue h-1 bg-google-border rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-google-textSecondary">
                        <span>0</span>
                        <span>1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
