import React, { useEffect, useRef, useState } from 'react';
import CountdownTimer from './Timer';
import ProgressBar from './progressBar';

function Question({ question, closeConnection, sendAnswer, rightAnswer, playerAnswer, winnerForQuestion, percentage }) {
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionChange, setQuestionChange] = useState(false);
  const startTimeRef = useRef();
  const [timeToAnswer, setTimeToAnswer] = useState(0);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setQuestionChange(true);
    setSelectedAnswer(null);
    startTimeRef.current = Date.now(); // Store the current time when the question changes
  }, [question]);

  useEffect(() => {
    // Change the color of the right answer when it is received
    if (selectedAnswer === rightAnswer) {
      // Update the CSS class or inline style of the button to change its color
      // For example, you can add a CSS class to the button element:
      // 1. Create a CSS class to define the desired color
      // 2. Use the class conditionally based on the selectedAnswer and rightAnswer
      // Here's an example using a CSS class called 'correct-answer':
      // Add a CSS class to the button if the selectedAnswer matches the rightAnswer
      const buttons = document.getElementsByClassName('answer-button');
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (button.value === rightAnswer) {
          button.classList.add('correct-answer');
        }
      }
    }
  }, [rightAnswer]);



  if (!question) {
    // Display a loading message or a placeholder while the question is being received
    return <div>Loading...</div>;
  }

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
    const endTime = Date.now();
    const timeDifference = Math.floor((endTime - startTimeRef.current) / 1000);
    setTimeToAnswer(timeDifference);
    sendAnswer(answer, timeDifference);
  }



  const renderNewDiv = () => {
    return (
      <div className="my-custom-div">New div: {playerAnswer}</div>
    );
  };

  return (
    <div >
      <button onClick={closeConnection} >exit</button>
      <div className='questionPage'>       
        <CountdownTimer
          seconds={10} // Set the desired timer duration
          size={80} // Set the desired size
          strokeBgColor="black" // Set the desired background color
          strokeColor="lightblue" // Set the desired stroke color
          strokeWidth={3} // Set the desired stroke width
          restart={questionChange} // Pass the questionChange state as a prop
        />
        <h3 id="question">{question.question}</h3>
        <div className="answer-grid">
          {question.incorrect_answers
            .map((answer, index) => (
              <button className={selectedAnswer === answer ? 'selected-answer answer-button' : 'answer-button'}
                key={index}
                onClick={(e) => handleAnswerClick(e.target.value)}
                disabled={selectedAnswer !== null} value={answer}>
                {answer}
              </button>
            ))}
        </div>
        <ProgressBar completed={percentage} />
        <span>{
          (winnerForQuestion) != null ? <div>{winnerForQuestion == "nobody" ? "nobody answered correctly :(" : (winnerForQuestion + " answered correctly first!!!!")}</div> :
            (playerAnswer) != null ? <div>{renderNewDiv()}</div> :
              <></>
        }</span>
        
      </div>
    </div>
  );
}



export default Question;



