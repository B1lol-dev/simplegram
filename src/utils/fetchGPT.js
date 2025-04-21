import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = import.meta.env.VITE_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function fetchGPT(userMsg) {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        {
          role: "system",
          content:
            "You are a friend. your name is John. DO NOT ANSWER USING MARKDOWN!",
        },
        { role: "user", content: userMsg },
      ],
      temperature: 1.0,
      top_p: 1.0,
      model: model,
    },
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  return response.body.choices[0].message.content;
}
