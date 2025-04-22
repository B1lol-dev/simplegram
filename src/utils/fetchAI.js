import OpenAI from "openai";

export const fetchAI = async (userMsg, name) => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_AI_TOKEN,
    baseURL: "https://api.intelligence.io.solutions/api/v1/",
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openai.chat.completions.create({
    model: "meta-llama/Llama-3.3-70B-Instruct",
    messages: [
      {
        role: "system",
        content: `You are a friend. your name is ${name}. DO NOT ANSWER USING MARKDOWN!`,
      },
      {
        role: "user",
        content: userMsg,
      },
    ],
    temperature: 0.7,
    max_tokens: 50,
  });

  return chatCompletion.choices[0].message.content;
};
