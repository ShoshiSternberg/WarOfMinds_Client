
import { useState } from "react";
const { Form, Button } = require("react-bootstrap")
const Game = ({sendAnswer},props) => {
   const [answer, setAnswer] = useState();
   const [qTime,setQTime]=useState(props.qTime);
   const [aTime,setATime]=useState();
  return (
    <Form
      onSubmit={e => {
        setATime()//את העשה הנוכחית- זמן המענה
        e.preventDefault();
        sendAnswer(answer,2);
      }}>

      <div>
        <h1>Trivia Game</h1>
        <p>Question: {props.question}</p>
      </div>
      <Form.Group>
        <Form.Control placeholder="answer" onChange={e => setAnswer(e.target.value)} />
      </Form.Group>
      <Button variant="success" type='submit' disabled={!answer}>send answer</Button>
    </Form>

  );
};
export default Game;


