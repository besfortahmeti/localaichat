import { streamText, UIMessage, convertToModelMessages } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const perplexity = createOpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY ?? "",
  baseURL: "https://api.perplexity.ai",
});

const ollama = createOpenAI({
  baseURL: "http://127.0.0.1:11434/v1",
  apiKey: "ollama",
});

const modelMap: Record<string, any> = {
  "gpt-4o": openai.chat("gpt-4o"),
  "gpt-4o-mini": openai.chat("gpt-4o-mini"),
  "claude-opus-4-20250514": anthropic("claude-3-opus-20240229"),
  "claude-sonnet-4-20250514": anthropic("claude-3-5-sonnet-20240620"),
  "gemini-2.0-flash-exp": google("gemini-1.5-flash"),
  "granite3-dense:8b": ollama.chat("granite3-dense:8b"), // Local model
};

export async function POST(req: Request) {
  const body = await req.json();
  const {
    messages,
    model: modelId,
    webSearch,
  }: {
    messages: UIMessage[];
    model: string;
    webSearch: boolean;
  } = body;

  const specificModel = modelMap[modelId] || openai.chat("gpt-4o");
  const finalModel = webSearch
    ? perplexity.chat("sonar-medium-online")
    : specificModel;

  const result = streamText({
    model: finalModel,
    messages: await convertToModelMessages(messages),
    system:
      "You are a helpful assistant that can answer questions and help with tasks",
  });
  // send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
