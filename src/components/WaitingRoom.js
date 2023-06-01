import React, { useState } from 'react';
import '../App.css';
import { Link, Outlet } from 'react-router-dom';


function WaitingRoom({players}) {
    return (
        <>
            <div>waiting room!</div>
            <ul className='waitings'>
                {players.map((element, index) => (
                    <li key={index}>{
                        element.playerID
                    }</li>
                ))}
            </ul>
        </>
    )
}

export default WaitingRoom;