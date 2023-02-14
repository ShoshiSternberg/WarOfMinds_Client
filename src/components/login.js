import React, { useEffect } from "react";
import {
    createSignalRContext, // SignalR
    createWebSocketContext, // WebSocket
    createSocketIoContext, // Socket.io
  } from "react-signalr";
export default function Login(props) {

    // functions and vars

    let connection 
    useEffect(() => {

            connection=new signalR.HubConnectionBuilder().withUrl("/chat")
            .build();

        connection.on("send", data => {
            console.log(data);
        });


    }, [])

 
    const invoke = () => {
        connection.invoke("JoinGroup", "Hello");
    }


    return (
        <>
            <button onClick={invoke} ></button>
        </>
    )
}
