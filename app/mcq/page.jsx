"use client";
import { useState } from 'react';
import QuestionComponent from '@/components/QuestionComponent';

const Page = () => {
  const [userResponses, setUserResponses] = useState([]);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    // Add more questions as needed
  ];

  const handleQuestionSubmit = (userResponse) => {
    setUserResponses([...userResponses, userResponse]);
    // You can store or process the responses as needed
  };

  return (
    <div>
      {questions.map((question, index) => (
        <QuestionComponent
          key={index}
          question={question.question}
          options={question.options}
          onSubmit={(userResponse) => handleQuestionSubmit({ questionIndex: index, userResponse })}
        />
      ))}
      {/* Display results or perform additional actions */}
    </div>
  );
};

export default Page;
