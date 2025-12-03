import { GoogleGenAI, Type } from "@google/genai";
import { Scenario, IdiomType } from '../types';

export const generateNewScenarios = async (count: number = 6): Promise<Scenario[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Define the schema for the output
  const idiomValues = Object.values(IdiomType);
  
  const prompt = `
    Generate ${count} unique, simple, and clear scenarios for a 5th-grade classroom card game about time idioms.
    The idioms are: ${idiomValues.join(', ')}.
    Create a mix of scenarios covering different idioms.
    Each scenario should be one sentence that clearly describes a situation matching one of the idioms.
    Do not use the idiom phrase itself in the scenario text.
    Ensure the scenarios are distinct and easy for a 10-year-old to understand.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: {
                type: Type.STRING,
                description: "The scenario description text (one sentence).",
              },
              correctIdiom: {
                type: Type.STRING,
                enum: idiomValues,
                description: "The idiom that matches the scenario.",
              },
            },
            required: ["text", "correctIdiom"],
          },
        },
      },
    });

    const scenariosText = response.text;
    if (!scenariosText) return [];

    const rawData = JSON.parse(scenariosText);
    
    // Map to our Scenario interface with unique IDs
    return rawData.map((item: any, index: number) => ({
      id: `gen-${Date.now()}-${index}`,
      text: item.text,
      correctIdiom: item.correctIdiom as IdiomType,
    }));

  } catch (error) {
    console.error("Failed to generate scenarios:", error);
    throw error;
  }
};