import React, { useState } from 'react';
import { QuizData } from './QuizData';

function Quizz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function changeCurrentQuestion() {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  }

  function updateScore() {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz App</h1>
      {showResult ? (
        <div className="result-container">
          <h2>Your Score: {score}</h2>
        </div>
      ) : (
        <div className="question-container">
          <p className="question-text">{QuizData[currentQuestion].question}</p>
          <div className="options-container">
            {QuizData[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                className={`option-button ${clickedOption === i + 1 ? 'selected' : ''}`}
                onClick={() => setClickedOption(i + 1)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="next-button-container">
            <button className="next-button" onClick={changeCurrentQuestion}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quizz;
