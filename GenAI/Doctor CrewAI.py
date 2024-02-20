import os
from crewai import Agent, Task, Crew, Process
from langchain_google_vertexai import VertexAI
from langchain_openai import AzureChatOpenAI
from langchain.tools import DuckDuckGoSearchRun
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
import google.generativeai as genai

load_dotenv()
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

search_tool = DuckDuckGoSearchRun()

model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.1)
model2 = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.4)
# mistral_api_key = os.environ.get("MISTRAL_API_KEY")
# llm_mistral = ChatMistralAI(mistral_api_key=mistral_api_key, model="mistral-medium")
# llm_vertex = VertexAI(model_name="gemini-pro")
# llm_azure = AzureChatOpenAI(
#     openai_api_version= "2023-07-01-preview",
#     azure_deployment=os.environ.get("AZURE_OPENAI_DEPLOYMENT", "openai"),
#     azure_endpoint=os.environ.get("AZURE_OPENAI_ENDPOINT", "https://<your-endpoint>.openai.azure.com/"),
#     api_key=os.environ.get("AZURE_OPENAI_KEY")
# )
symptoms = input("Enter patient's symptoms: ")
# Create Agents
Assistant = Agent(
    role='Senior Nurse',
    goal="Discover and examine Disease from symptoms like {symptoms}",
    backstory="You're an expert Nurse help doctor to find what potential problem is patient is suffering.",
    verbose=True,
    allow_delegation=False,
    tools=[search_tool],
    llm=model
)


critic = Agent(
    role='Expert Doctor',
    goal="Give constructive feedback on post drafts",
    backstory="You're an expert Doctor and provide an instant before they reach hospital medical help to emergency patients.",
    verbose=True,
    allow_delegation=True,
    llm=model2
)

# Create Tasks
task_search = Task(
    description="Compile a report listing  2 causes for symptoms",
    agent=Assistant
)


task_critique = Task(
    description="Provide medical advise and if serious syptoms then advise life saving medical tips till paitent reach hostipal safely.",
    agent=critic
)

# Create Crew
crew = Crew(
    agents=[Assistant, critic],
    tasks=[task_search, task_critique],
    verbose=2,
    process=Process.sequential 
)

# Get your crew to work!
result = crew.kickoff()

print("#############")
print(result)