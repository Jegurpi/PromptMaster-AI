import { GoogleGenAI, Type } from "@google/genai";
import { AIModel, PromptResponse } from "../types";

// Initialize the client strictly with process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateOptimizedPrompt = async (
  userText: string,
  targetModel: AIModel
): Promise<PromptResponse> => {
  
  const systemInstruction = `
    You are an expert Prompt Engineer with deep knowledge of LLMs and Image Generation models.
    Your task is to take a raw, often vague user input and transform it into a highly optimized, professional prompt specifically tailored for the "${targetModel}" AI model.
    
    Guidelines based on model:
    - If "${targetModel}" is Midjourney/Stable Diffusion/DALL-E: Focus on visual descriptors, lighting, style, composition, aspect ratios, and negative prompts (if applicable). Use English for the prompt output as these models understand English best.
    - If "${targetModel}" is ChatGPT/Claude/Gemini: Focus on persona adoption, context setting, clear constraints, output format specification, and chain-of-thought requirements.
    
    Language: The 'optimizedPrompt' should be in English (standard for most AIs), but the 'explanation' and 'tips' must be in Russian.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userText,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            originalText: { type: Type.STRING },
            optimizedPrompt: { type: Type.STRING, description: "The final ready-to-use prompt in English." },
            explanation: { type: Type.STRING, description: "Explanation of why this prompt works (in Russian)." },
            tips: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 actionable tips for this specific model (in Russian)."
            }
          },
          required: ["originalText", "optimizedPrompt", "explanation", "tips"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini.");
    }

    return JSON.parse(text) as PromptResponse;

  } catch (error) {
    console.error("Error generating prompt:", error);
    throw error;
  }
};