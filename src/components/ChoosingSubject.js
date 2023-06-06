import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
const { Form, Button } = require("react-bootstrap")
const ChoosingSubject = ({ joinGame, createGame, waitGame ,closeConnection}) => {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState();
    useEffect(() => {
        axios.get(`https://localhost:7203/api/Subject`)
            .then(res => {                
                setSubjects(res.data);
                
            })

    }, [])

    return (
        <>
           <button onClick={closeConnection} >exit</button>
            <ul className='subjects'>
                {subjects.map((element, index) => (
                    <li key={index}>{
                        <button onClick={e => {
                            setSubject(parseInt(e.target.value));
                        }} className='subjectForChoosing' value={element.subjectID}>
                            {element.subjectname}
                        </button>
                    }</li>
                ))}
            </ul>
            <Button variant="success" onClick={() => createGame(subject)} disabled={!subject}>create new</Button><br />
            <Button variant="success" onClick={() => joinGame(subject)} disabled={!subject}>join to exist game</Button><br />
            <Button variant="success" onClick={() => waitGame(subject)} disabled={!subject}>wait to start game</Button><br />

        </>

    );
}

export default ChoosingSubject;