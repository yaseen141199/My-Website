export interface ModelConfig {
    model: string;
    temperature: number;
    maxOutputTokens: number;
    topK: number;
    topP: number;
}

export interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
}

export interface GenerateParams {
    messages: Message[];
    config: ModelConfig;
    onChunk: (text: string) => void;
    onComplete: () => void;
    onError: (error: Error) => void;
}
