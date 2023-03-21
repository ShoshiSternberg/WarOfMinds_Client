import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useState } from 'react';
import Login from './components/login';
import Game from './components/Game';

const App = () => {
  const [connection, setConnection] = useState();
  const [res, setRes] = useState();
  const [question, setQuestion] = useState();
  const [qTime,setQTime]=useState();
  const [answer,setAnswer]=useState();
  const [winnerForQuestion,setWinnerForQuestion]=useState();
  const joinGame = async (user, subject) => {
    try {

      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7203/TriviaHub")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message) => {
        console.log(user + " : " + message);
        setRes(message);
      });
      
      connection.on('ReceiveQuestion', (question) => {
        setQTime()// השעה הנוכחית של קבלת השאלה
        console.log('Received question: ', question);
        setQuestion(question);
      });

      connection.on("ReceiveAnswerAndWinner",(answer,winner)=>{
        console.log('right answer:',answer,winner,' answered correctly first');
        setAnswer(answer);
        setWinnerForQuestion(winner);
      })
      await connection.start();
      console.log(connection);

      await connection.invoke("JoinGameAsync", user, subject);
      setConnection(connection);

    } catch (e) {
      console.log(e);
    }
  };
//useRef לכל המשתנים שצריך לעדכן מיד כשהם מתעדכנים-
//שאלה, מנצח
const sendAnswer=async (answer,time)=>{
     if (!connection)return;
     connection.invoke("GetAnswerAsync",question.questionId, answer, time);
};
  return (
    <div className='app'>
      <h2>world of minds</h2>
      {!connection ? (
        <Login joinGame={joinGame} />
      ) : (
        <Game res={res} question={question} qTime={qTime} answer={answer} winnerForQuestion={winnerForQuestion} sendAnswer={sendAnswer} />
      )}
    </div>
  );
};

export default App;