from langchain import PromptTemplate, OpenAI, LLMChain #use it to make function take virable inputand output
import os
from dotenv import load_dotenv

# config API stuff
try:
    load_dotenv('.env')
    api_key = os.getenv("OPENAI_API_KEY")

    if api_key:
        os.environ["OPENAI_API_KEY"] = api_key
    else:
        print("API key not found in environment variable or .env file.")
except FileNotFoundError:
    api_key = os.getenv("OPENAI_API_KEY")

    if api_key:
        os.environ["OPENAI_API_KEY"] = api_key
    else:
        print("API key not found in environment variable or .env file.")
# create a prompt template with the following parameters:
prompt_template = "based on your input, '{user_prompt}', here's a story:\n\n..."

llm = OpenAI(temperature=0)
llm_chain = LLMChain(
    llm=llm,
    prompt=PromptTemplate.from_template(prompt_template)
)
prompt = "funny robot who looks for fuel"
response = llm_chain(prompt)
print(response)