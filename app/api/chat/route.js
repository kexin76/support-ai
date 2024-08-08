import {NextResponse} from 'next/server' // Import NextResponse from Next.js for handling responses
const { GoogleGenerativeAI } = require("@google/generative-ai");

// // System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = "Answer to user response"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export async function POST(req){
  try{
    const data = await req.json() // Parse the JSON body of the incoming request

    const result = await model.generateContent(data[1]["content"]);

    const response = await result.response;
    const output = response.text()

    console.log(output)

    return new NextResponse(output)

  } catch (error){
    console.log(error)
  }
}

