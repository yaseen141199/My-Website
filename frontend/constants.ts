import { ModelConfig } from './types';

export const DEFAULT_CONFIG: ModelConfig = {
    model: 'gemini-2.5-flash',
    temperature: 0.7,
    maxOutputTokens: 1024,
    topK: 40,
    topP: 0.95,
};
