// import React, { useEffect } from "react";
// import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
// export default function Login(props) {

//     // functions and vars

//     let connection 
//     useEffect(() => {

//             connection=new signalR.HubConnectionBuilder().withUrl("/chat")
//             .build();

//         connection.on("send", data => {
//             console.log(data);
//         });


//     }, [])

 
//     const invoke = () => {
//         connection.invoke("JoinGroup", "Hello");
//     }


//     return (
//         <>
//             <button onClick={invoke} ></button>
//         </>
//     )
// }
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
            <Form.Control placeholder="name" onChange={e=>setUser(e.target.value)}/>
            <Form.Control placeholder="subject" onChange={e=>setSubject(e.target.value)}/>
        </Form.Group>
        <Button variant="success" type='submit'disabled={!user||!subject}>Join</Button>
    </Form>


}
export default Login;
