export enum AIModel {
  ChatGPT = 'ChatGPT',
  Midjourney = 'Midjourney',
  StableDiffusion = 'Stable Diffusion',
  DALL_E = 'DALL-E 3',
  Gemini = 'Gemini',
  Claude = 'Claude 3'
}

export interface PromptResponse {
  originalText: string;
  optimizedPrompt: string;
  explanation: string;
  tips: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  description: string;
  category: 'Text' | 'Image' | 'Code' | 'Video';
  bestFor: string;
  example: string;
}

export const MODELS_LIST = [
  { id: AIModel.ChatGPT, label: 'ChatGPT (GPT-4)', type: 'text' },
  { id: AIModel.Claude, label: 'Claude 3', type: 'text' },
  { id: AIModel.Gemini, label: 'Google Gemini', type: 'text' },
  { id: AIModel.Midjourney, label: 'Midjourney v6', type: 'image' },
  { id: AIModel.DALL_E, label: 'DALL-E 3', type: 'image' },
  { id: AIModel.StableDiffusion, label: 'Stable Diffusion XL', type: 'image' },
];