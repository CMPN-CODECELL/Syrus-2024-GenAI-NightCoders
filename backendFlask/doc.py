from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()
os.getenv("GOOGLE_API_KEY")
api_key= "AIzaSyBjRjju8brWmATwq7OB4aP84uBWzq5lBtc"
genai.configure(api_key="AIzaSyBjRjju8brWmATwq7OB4aP84uBWzq5lBtc")


def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001",google_api_key=api_key)
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def get_conversational_chain():
    prompt_template = """
        You are a doctor reviewing a medical report for a patient.
        Provide answers to patient's questions and suggest diet plans based on the report.
        Mention possible diseases if a healthy diet is not followed, based on the report's parameters.

        Context: {context}
        Question: {question}

        Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    return chain

def process_and_respond(pdf_docs):
    raw_text = get_pdf_text(pdf_docs)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)

    context = raw_text
    question = ""
    chain = get_conversational_chain()
    response = chain({"input_documents": [], "context": context, "question": question})

    return response["output_text"]