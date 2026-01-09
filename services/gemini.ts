import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateQuote = async (topic: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Science is the poetry of reality. - Richard Dawkins"; // Fallback
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, inspiring quote about ${topic} suitable for a biology student. Return only the quote text and author.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The most beautiful thing we can experience is the mysterious. - Albert Einstein";
  }
};

export const getCareerDetails = async (career: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Loading detailed insights..."; // Fallback indication
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a brief, engaging "Day in the Life" paragraph (max 3 sentences) for a ${career}. Focus on the cool scientific tasks they do.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Data unavailable at the moment.";
  }
};
