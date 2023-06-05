import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useEffect, useState } from 'react';
import Login from './login';
import Question from './questions';
import ChoosingSubject from './ChoosingSubject';
import { useNavigate } from 'react-router';
import WaitingRoom from './WaitingRoom';
const Game = () => {
  const [connection, setConnection] = useState(new HubConnectionBuilder()
    .withUrl("https://localhost:7203/TriviaHub")
    .configureLogging(LogLevel.Information)
    .build());

  const [res, setRes] = useState();
  const [question, setQuestion] = useState(null);
  const [toGame, setTogame] = useState(false)
  const [qTime, setQTime] = useState();
  const [answer, setAnswer] = useState();
  const [winnerForQuestion, setWinnerForQuestion] = useState();
  const [players, setPlayers] = useState([]);
  const [manager,setManager]=useState(false);
  let navigate = useNavigate();
  const startConnection = async () => {
    try {
      connection.serverTimeoutInMilliseconds = 1000 * 60 * 10;
      connection.on('ReceiveMessage', (user, message) => {
        console.log(user + ' : ' + message);
        setRes(message);
        setTogame("Questions");
      });

      //הצטרפות לחדר המתנה- מעבר לחדר וקבלת הממתינים
      connection.on('JoinWaitingRoom', (Waitings) => {
        setPlayers(Waitings);
        setTogame("waitingRoom");   
        console.log("watings: ",Waitings);       
      });

      //הצטרפות שחקן אחר לחדר או למשחק
      connection.on('PlayerJoined', (newPlayer) => {          
        setPlayers((prevWaitings) => [...prevWaitings, newPlayer]);          
        console.log("player joined: ",newPlayer);   
      });

      connection.on('ReceiveQuestion', (question) => {
        setQTime(); // השעה הנוכחית של קבלת השאלה
        console.log('Received question: ', question);
        setQuestion(question);
      });

      connection.on('ReceiveAnswerAndWinner', (answer, winner) => {
        console.log('right answer:', answer);
        setAnswer(answer);
        setWinnerForQuestion(winner);
      });

      await connection.start();
      console.log(connection);

    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {    
    startConnection();
  }, []);
  let user = JSON.parse(sessionStorage.user);
  
  const startGame = async () => {
    await connection.invoke("StartGameByManager");
    setManager(true);
  }

  const joinGame = async (subject) => {
    await connection.invoke("JoinExistingGameAsync", user.playerID, subject);
  }
  const createGame = async (subject) => {
    await connection.invoke("CreateNewGameAsync", user.playerID, subject);
  }
  const waitGame = async (subject) => {
    await connection.invoke("JoinWaitingRoomAsync", user.playerID, subject);
  }
  const sendAnswer = async (answer, time) => {
    await connection.invoke("GetAnswerAsync", question.questionId, answer, time);
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='app'>
      <h2>war of minds</h2>
      {toGame == "" ? (
        <div className='window'>
          <ChoosingSubject joinGame={joinGame} createGame={createGame} waitGame={waitGame} />
        </div>
      ) : toGame == "Questions" ?
        <Question res={res} question={question} qTime={qTime} answer={answer} winnerForQuestion={winnerForQuestion} sendAnswer={sendAnswer} startGame={startGame} />

        : <WaitingRoom players={players} manager={manager} startGame={startGame}/>}
    </div>
  );
};

export default Game;


