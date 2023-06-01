import React, {useEffect, useRef, useState } from 'react';

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

function Question({question}) {
    const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if (!question) {
    // Display a loading message or a placeholder while the question is being received
    return <div>Loading...</div>;
  }


  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
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
    <h3 id="question">{question.question}</h3>
    <div className="answer-grid">
      {question.answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(answer)}
          disabled={selectedAnswer !== null}>
          {answer}
        </button>
      ))}
    </div>
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


