import openai from "@/lib/utils/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  if (!prompt || prompt === "") {
    return new Response("Please send your prompt", { status: 400 });
  }
  const aiResult = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${prompt}` }],
    temperature: 0.9,
    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  const response =
    aiResult.choices[0].message?.content?.trim() ||
    "Sorry, there was a problem!";
  return NextResponse.json({ text: response });
}

export async function GET(req: Request) {
  const aiResult = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `hello` }],
  });
  const response =
    aiResult.choices[0].message?.content?.trim() ||
    "Sorry, there was a problem!";
  return Response.json({ text: response });
}
