import React, { useEffect } from "react";

function Question({ question, timeRemaining, setTimeRemaining, onAnswered }) {
  useEffect(() => {
    
    if (timeRemaining === 0) {
      setTimeRemaining(10);       
      onAnswered(false);          
      return;                     
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1); 
    }, 1000);

    
    return () => clearTimeout(timeoutId);
  }, [timeRemaining, setTimeRemaining, onAnswered]); 

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>Time Remaining: {timeRemaining}</p>
    </div>
  );
}

export default Question;
