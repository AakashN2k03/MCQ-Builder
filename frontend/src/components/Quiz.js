import React, { useState } from 'react';
import axios from 'axios';
import quizBackgroundImage from '../img/qa_bg.jpeg'; // Ensure this path is correct

function App() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/generate_questions', {
        topic,
        difficulty
      });
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error generating questions:', error);
    }
    setLoading(false);
  };

  return (
    <div className="quizbgimg min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url(${quizBackgroundImage})` }}>
      <div className="min-h-screen bg-black bg-opacity-30 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center w-full">
        <h1 className='text-center py-8 text-4xl font-bold text-white shadow-text'>MCQ Builder</h1>
        <div className="max-w-2xl w-full mx-auto">
          <form onSubmit={handleSubmit} className='backdrop-blur-sm bg-white bg-opacity-20 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className="mb-6">
              <label htmlFor="topic" className="block text-white text-xl font-bold mb-2 shadow-text">Topic:</label>
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl bg-white bg-opacity-70"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="difficulty" className="block text-white text-xl font-bold mb-2 shadow-text">Difficulty:</label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl bg-white bg-opacity-70"
              >
                <option value="">Select difficulty</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 bg-opacity-70 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
              >
                {loading ? 'Generating...' : 'Generate Questions'}
              </button>
            </div>
          </form>
        </div>
        {questions && (
          <div className="max-w-4xl w-full mx-auto backdrop-blur-sm bg-white bg-opacity-20 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 shadow-text">Generated Questions:</h2>
            <pre className="whitespace-pre-wrap text-lg text-white shadow-text">{questions}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
