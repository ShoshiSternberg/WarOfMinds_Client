
import { useState } from "react";
const { Form, Button } = require("react-bootstrap")
const Login=({joinGame})=>{
    const [user,setUser]=useState();
    const [subject,setSubject]=useState();

    return <Form
    onSubmit={e=>{
        e.preventDefault();
        joinGame(user,subject);
    }}>
        <Form.Group>
            <Form.Control placeholder="name" onChange={e=>setUser(parseInt(e.target.value))}/>
            <Form.Control placeholder="subject" onChange={e=>setSubject(parseInt(e.target.value))}/>
        </Form.Group>
        <Button variant="success" type='submit'disabled={!user||!subject}>Join</Button>
    </Form>


}
export default Login;
