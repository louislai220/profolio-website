import "./Prompt.css"
import LoadingSpinner from "./LoadingSpinner";
import { useState, useEffect } from 'react';
import { QuestionForm, QuestionList } from './QuestionForm'; 
import axios from 'axios';

const Prompt = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api_url = import.meta.env.VITE_BACKEND_URL
  // Handle question submission
  const handleSubmit = async (question) => {
    try {
      setLoading(true)
      const response = await axios.post(`${api_url}/query`, { msg: question });
      const newItem = {question: question, answer: response.data.message}; // Expect { question, answer }
      console.log(newItem)
      setLoading(false)
      setQuestions((prev) => [...prev, newItem]);
      setError(null);
    } catch (err) {
      setError('Failed to submit question');
    }
  }; 
  return <div className="prompt">
        <h1>Ask the details about {import.meta.env.VITE_PROFILE_NAME} working experience, education background and skills</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <QuestionForm onSubmit={handleSubmit} />
        {loading? <LoadingSpinner/>: <QuestionList questions={questions} />}
        
      </div>

}

export default Prompt;
