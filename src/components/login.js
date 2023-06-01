
import { useState } from "react";
const { Form, Button } = require("react-bootstrap")
const Login = ({ joinGame , createGame,waitGame}) => {
    const [user, setUser] = useState();
    const [subject, setSubject] = useState();

    return <Form >

        <Form.Group>

            <Form.Control placeholder="name" onChange={e => setUser(parseInt(e.target.value))} />
            <Form.Control placeholder="subject" onChange={e => setSubject(parseInt(e.target.value))} />
        </Form.Group>
        <Button variant="success" onClick={()=>createGame(user,subject)} disabled={!user || !subject}>create new</Button><br/>
        <Button variant="success" onClick={()=>joinGame(user,subject)} disabled={!user || !subject}>join to exist game</Button><br/>
        <Button variant="success" onClick={()=>waitGame(user,subject)} disabled={!user || !subject}>wait to start game</Button><br/>
    </Form>


}
export default Login;
