
import { useState } from "react";
const { Form, Button } = require("react-bootstrap")
const Game = ({sendAnswer},props) => {
  const [answer, setAnswer] = useState();

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        sendAnswer(answer);
      }}>

      <div>
        <h1>Trivia Game</h1>
        <p>Question: {props.question}</p>
      </div>
      <Form.Group>
        <Form.Control placeholder="answer" onChange={e => setAnswer(parseInt(e.target.value))} />
      </Form.Group>
      <Button variant="success" type='submit' disabled={!answer}>send answer</Button>
    </Form>

  );
};
export default Game;


