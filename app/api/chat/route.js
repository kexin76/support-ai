import {NextResponse} from 'next/server' // Import NextResponse from Next.js for handling responses
const { GoogleGenerativeAI } = require("@google/generative-ai");

// // System prompt for the AI, providing guidelines on how to respond to users
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

export async function POST(req){
  try{
    
    const data = await req.json() // Parse the JSON body of the incoming request
    // console.log(data);
    
    let chat_res = await chat.sendMessage(data[1]["content"]);
    console.log(chat_res.response.text());

    // const result = await model.generateContent(data[1]["content"]);

    // console.log(data[1]["content"]);

    // const response = await result.response;
    // const output = response.text()


    return new NextResponse(chat_res.response.text())

  } catch (error){
    console.log(error)
  }
}

