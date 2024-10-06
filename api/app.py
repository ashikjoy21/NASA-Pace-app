from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("Google API Key not found.")

genai.configure(api_key=GOOGLE_API_KEY)

# Initialize RAG model
def initialize_rag_model():
    print("Loading PDF...")
    pdf_path = "D:\\proto\\NASA-Pace-Edu\\bams-bams-d-18-0056.1.pdf"
    loader = PyPDFLoader(pdf_path)
    pages = loader.load()
    print(f"Loaded {len(pages)} pages")

    print("Splitting text...")
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1500)
    docs = text_splitter.split_documents(pages)
    print(f"Created {len(docs)} text chunks")

    print("Creating vector store...")
    db = Chroma.from_documents(docs, GoogleGenerativeAIEmbeddings(model="models/embedding-001"))
    retriever = db.as_retriever(search_kwargs={"k": 3})
    print("Vector store created")

    print("Initializing LLM and creating chain...")
    llm = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt = ChatPromptTemplate.from_messages([
        ("human", '''Use the following context to answer the question in detail: {context}\n\nQuestion: {input}''')
    ])
    question_answer_chain = create_stuff_documents_chain(llm, prompt)
    rag_chain = create_retrieval_chain(retriever, question_answer_chain)
    print("RAG chain created")

    return rag_chain

rag_chain = initialize_rag_model()

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('question')
    if not question:
        return jsonify({"error": "No question provided"}), 400

    try:
        response = rag_chain.invoke({"input": question})
        answer = response['answer']
        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)