from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain_google_genai import GoogleGenerativeAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv
import os
import re

app = FastAPI()

# Load environment variables from .env file
load_dotenv()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from your React app
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Set up your Google API key
google_api_key = os.getenv("GOOGLE_API_KEY")

# Initialize the Gemini model
llm = GoogleGenerativeAI(model="gemini-pro")

# Create a prompt template for generating questions
question_template = PromptTemplate(
    input_variables=["topic", "difficulty"],
    template="Generate 15 mcq {difficulty} question about {topic} with 4 options and also represent the answer for each mcq question"
)

# Create an LLMChain
question_chain = LLMChain(llm=llm, prompt=question_template)

class QuestionRequest(BaseModel):
    topic: str
    difficulty: str

@app.post("/generate_questions")
async def generate_questions(request: QuestionRequest):
    generated_question = question_chain.run(topic=request.topic, difficulty=request.difficulty)
    
    # Process the generated questions to remove asterisks
    processed_questions = re.sub(r'\*+', '', generated_question)
    
    return {"questions": processed_questions}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
