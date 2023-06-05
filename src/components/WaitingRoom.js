import React, { useState } from 'react';
import '../App.css';
import { Link, Outlet } from 'react-router-dom';


function WaitingRoom({players,manager,startGame}) {
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

            {
                manager&&<button onClick={startGame} >start game (allow to manager only)</button>
            }
        </>
    )
}

export default WaitingRoom;