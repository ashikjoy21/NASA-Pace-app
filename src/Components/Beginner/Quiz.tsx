import React, { useState } from 'react';

const questions = [
  {
    question: "How many special friends are in the story?",
    options: ["Two", "Four", "Six", "One"],
    answer: 1 // index of the correct answer
  },
  {
    question: "What is the name of the plankton in the story?",
    options: ["Clo", "Ocy", "Planty", "Aero"],
    answer: 2
  },
  {
    question: "Who was floating in the sky?",
    options: ["Planty", "Aero", "Clo", "Ocy"],
    answer: 1
  },
  {
    question: "What else does Clo bring to the Earth?",
    options: ["Fire", "Rain", "Wind", "Thunder"],
    answer: 1
  },
  {
    question: "What does Ocy help control?",
    options: ["The weather, climate, and food", "The stars and moon", "The trees and flowers", "The cars and roads"],
    answer: 0
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelection = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsQuizFinished(true);
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="h-screen w-screen bg-[#6a1b9a] flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-md">
        {isQuizFinished ? (
          <div className="p-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Score: {score}/{questions.length}</h2>
            <button
              onClick={handleRestartQuiz}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{questions[currentQuestion].question}</h3>
              <div className="options space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="option flex items-center">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name="quiz-option"
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerSelection(index)}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`option-${index}`} className="ml-2 block text-lg text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${selectedAnswer === null ? 'text-gray-400 bg-gray-200' : 'text-white bg-pink-600 hover:bg-pink-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out`}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
