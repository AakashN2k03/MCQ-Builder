# MCQ Builder (Last Minute Prep)

## Overview

The **MCQ Builder** project is designed to facilitate last-minute preparation for one-word answers. Leveraging the power of **GenAI** and the **Google Gemini LLM**, this application fetches relevant results from online sources and presents them seamlessly on a web page using **React.js**. Whether you're cramming for an exam or need quick reference material, this tool will enhance your study efficiency!

## Features

- **Dynamic Content Generation**: Utilizes advanced AI capabilities to generate MCQ questions based on user input.
- **Responsive Design**: Built with React.js, ensuring a smooth user experience across devices.
- **FastAPI Backend**: Serves as a robust backend framework, efficiently handling requests.
- **Environment Configuration**: Simple setup using environment variables to keep sensitive information secure.

## Requirements

Before you begin, ensure you have the following dependencies installed:

- **FastAPI**: For building the FastAPI web framework.
- **Uvicorn**: For running the FastAPI app.
- **Pydantic**: For data validation in FastAPI.
- **Python-dotenv**: For loading environment variables from the `.env` file.
- **Langchain_google_genai**: For utilizing the Google Gemini API.
- **Re**: Python's built-in module for regular expressions.
- **Langchain**: For managing the chains and prompts.
- **FastAPI.middleware.cors**: For handling CORS (Cross-Origin Resource Sharing) in FastAPI.

## Setup

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your_username/mcq_builder.git
   cd mcq_builder

2. **Create a virtual environment (recommended)**:
   python -m venv venv source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install the required libraries**:pip install -r requirements.txt

4. **Obtain your Google Gemini API key and set it as an environment variable**: Create a .env file in your project directory.
   Add the following line:GOOGLE_API_KEY=<your_api_key_here>

5. **Run your backend file**:python main.py

6. **Run your frontend**:npm start

## Output

![Screenshot (10)](https://github.com/user-attachments/assets/24a03624-c072-4121-8a40-6f5d4a8c2c09)

![Screenshot (17)](https://github.com/user-attachments/assets/8f32d9a7-5b02-4ed3-bd8d-361687fbde41)



## Contribution
Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Thanks to the creators of FastAPI, Uvicorn, and Langchain for their excellent libraries that made this project possible.
Special thanks to the Google Gemini API for providing powerful AI capabilities.
   

