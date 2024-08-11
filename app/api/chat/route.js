import {NextResponse} from 'next/server' 
const { GoogleGenerativeAI } = require("@google/generative-ai");

const systemPrompt = "Answer to user response"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Hi! I'm the Headstarter support assistant. How can I help you today?" }],
    },
  ],
});

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    
    const prompt = data[data.length - 1].content; // get the latest user message
    const chat_res = await chat.sendMessage(prompt);

    return new NextResponse(chat_res.response.text());

  } catch (error) {
    console.log(error);
    return new NextResponse('Error processing request', { status: 500 });
  }
}
