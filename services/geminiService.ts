import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `你是由中南林业科技大学（CSUFT）开发的智能学术助手“森旅助手”。
你的主要职责包括：
1. 总结林业、旅游管理、生态学等领域的学术文本。
2. 准确翻译中英文专业术语。
3. 解读关于国家公园、自然资源管理的政府政策。
4. 为林科大学生提供学习建议和资料检索指引。

请保持回答简洁、专业、乐于助人。请使用中文回答，并适当使用 Markdown 格式优化排版。`;

// Initialize the client
const createAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[] = []
): Promise<string> => {
  const ai = createAIClient();
  if (!ai) {
    return "错误：未检测到 API Key，请检查环境变量配置。";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text || "抱歉，我无法生成文本回应。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接森林网络时出现问题，请稍后再试。";
  }
};