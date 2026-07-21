import { GoogleGenAI } from '@google/genai';
import { GenerateParams } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY, vertexai: true });

export const generateContentStream = async ({
    messages,
    config,
    onChunk,
    onComplete,
    onError
}: GenerateParams) => {
    try {
        const contents = messages.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }));

        const responseStream = await ai.models.generateContentStream({
            model: config.model || 'gemini-2.5-flash',
            contents: contents,
            config: {
                temperature: config.temperature,
                maxOutputTokens: config.maxOutputTokens,
                topK: config.topK,
                topP: config.topP,
            }
        });

        for await (const chunk of responseStream) {
            if (chunk.text) {
                onChunk(chunk.text);
            }
        }
        onComplete();
    } catch (error) {
        console.error("Error generating content:", error);
        onError(error instanceof Error ? error : new Error(String(error)));
    }
};
