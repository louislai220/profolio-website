import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from langchain_core.messages import HumanMessage
from agent import rag_agent

app = FastAPI()
origins = [
    os.getenv('FRONTEND_URL'),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

agent= rag_agent();

class queryMessage(BaseModel):
    msg: str

@app.get("/")
def root():
    return {"Hello" : "World"}

@app.post("/query")
def query(msg: queryMessage):
    print(f'query message: {msg.msg}')

    result = agent.invoke(msg.msg)
            
    print("\n=== ANSWER ===")
    print(result['messages'][-1].content)
    return {"message" : result['messages'][-1].content}