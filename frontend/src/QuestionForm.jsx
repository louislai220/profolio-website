// src/components/QuestionForm.jsx
import { useState } from 'react';
import "./Questionform.css"

export const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion(''); // Clear input
    }
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <input
        className="question-input"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      <button className="question-button" type="submit">
        Submit
      </button>
    </form>
  );
};

// src/components/QuestionList.jsx
export const QuestionList = ({ questions }) => (
  <div>
    <h3>Submitted Questions & Answers</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {questions.length ? (
        questions.map((item, index) => (
          <li className="answer" key={index}>
            <strong>Q:</strong> {item.question} <br />
            {item.answer && <><strong>A:</strong> {item.answer}</>}
          </li>
        ))
      ) : (
        <p>No questions submitted yet.</p>
      )}
    </ul>
  </div>
);

// src/components/index.js (barrel file, per your import question)
//export { QuestionForm } from './QuestionForm';
//export { QuestionList } from './QuestionList';