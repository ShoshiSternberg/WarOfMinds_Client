import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useState } from 'react';
import Login from './components/login';
import Game from './components/Game';
const App = () => {
  const [connection, setConnection] = useState();
  const joinGame = async (user, subject) => {
    try {

      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7203/TriviaHub")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message) => {
        console.log(user+" "+message);
      });
      await connection.start();
      try {
         await connection.invoke("SendMessage", user, subject);
         setConnection(connection);
      } catch (err) {
        console.error(err);
      }
      

    } catch (e) {
      console.log(e)
    }
  }
  return <div className='app'>
  <h2>world of minds</h2>
  {
    !connection ?
      <Login joinGame={joinGame} />
      :
      <Game/>
    }

    </div>
  }
  
  export default App;
