import React, { useEffect, useRef, useState } from 'react';
import CountdownTimer from './Timer';
// const Question = ({ question }) => {
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     useEffect((question) => {
//         setQuestion(data.question);
//         setAnswers(data.question.incorrect_answers);
//     }, []);
//     const handleAnswerClick = (answer) => {
//         setSelectedAnswer(answer);
//     };

//     return (
//         <div>
//             <h3 id="question">{question.question}</h3>
//             <div className="answer-grid">
//                 {answers.map((answers, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleAnswerClick(answer)}
//                         disabled={selectedAnswer !== null}
//                     >
//                         {answer}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };import React, { useState, useEffect } from "react";

function Question({ question, closeConnection, sendAnswer, rightAnswer ,playerAnswer,winnerForQuestion}) {
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionChange, setQuestionChange] = useState(false);
  const startTimeRef = useRef();
  const [timeToAnswer, setTimeToAnswer] = useState(0);

  useEffect(() => {
    setQuestionChange(true);
    setSelectedAnswer(null);
    startTimeRef.current = Date.now(); // Store the current time when the question changes
  }, [question]);

  useEffect(() => {

  }, [rightAnswer]);

  // useEffect(
  //   ()=>{

  //   },[playerAnswer]
  // )

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

  return (
    // <div>
    //   <h2>{question}</h2>
    //   <div>
    //     <button disabled={selectedAnswer} onClick={() => handleAnswerSelect(answers[0])}>{answers[0]}</button>
    //     <button disabled={selectedAnswer} onClick={() => handleAnswerSelect(answers[1])}>{answers[1]}</button>
    //   </div>
    //   <div>
    //     <button disabled={selectedAnswer} onClick={() => handleAnswerSelect(answers[2])}>{answers[2]}</button>
    //     <button disabled={selectedAnswer} onClick={() => handleAnswerSelect(answers[3])}>{answers[3]}</button>
    //   </div>
    //   {selectedAnswer && <p>Selected answer: {selectedAnswer}</p>}
    // </div>
    <div>

      <button onClick={closeConnection} >exit</button>
      {/* <CountdownTimer
        seconds={15} // Set the desired timer duration
        size={80} // Set the desired size
        strokeBgColor="black" // Set the desired background color
        strokeColor="lightblue" // Set the desired stroke color
        strokeWidth={3} // Set the desired stroke width
        restart={questionChange} // Pass the questionChange state as a prop
      /> */}
      <h3 id="question">{question.question}</h3>
      <div className="answer-grid">
        {question.incorrect_answers
          .map((answer, index) => (
            <button className={selectedAnswer === answer ? 'selected-answer' : ''}
              key={index}
              onClick={(e) => handleAnswerClick(e.target.value)}
              disabled={selectedAnswer !== null} value={answer}>
              {answer}
            </button>
          ))}
      </div>
      <span>{
      (winnerForQuestion)!=null?<div>{winnerForQuestion=="nobody"?"nobody answerd correctly :(":(winnerForQuestion+ " answered correctly first!!!!")}</div>:
      (playerAnswer)!=null?<div>{playerAnswer} already answered!</div>:
      <></>
           
    
    }</span>
    </div>
  );
}



export default Question;
//קומפוננטת GAME הקודמת
// import { useState,useEffect } from "react";
// const { Form, Button } = require("react-bootstrap")
// const Game = ({sendAnswer,startGame},props) => {

//    const [answer, setAnswer] = useState();
//    const [qTime,setQTime]=useState();
//    const [aTime,setATime]=useState();
//   return (
//     <Form
//       onSubmit={e => {
//         console.log("------------");
//         setATime()//את השעה הנוכחית- זמן המענה
//         e.preventDefault();
//         sendAnswer(answer,2);
//       }}>

//       <div>
//         <h1>Trivia Game</h1>
//         <p>Question:</p>
//       </div>
//       <Form.Group>
//         <Form.Control placeholder="answer" onChange={e => setAnswer(e.target.value)} />
//       </Form.Group>
//       <Button variant="success" type='submit' disabled={!answer}>send answer</Button>
//       <Button onClick={()=>startGame()} >start game</Button>
//     </Form>

//   );
// };
// export default Game;


