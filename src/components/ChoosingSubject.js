import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
const { Form, Button } = require("react-bootstrap")
const ChoosingSubject = ({ joinGame, createGame, waitGame }) => {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState();
    useEffect(() => {
        axios.get(`https://localhost:7203/api/Subject`)
            .then(res => {

                console.log(res.data);
                setSubjects(res.data);
            })

    }, [])

    useEffect(() => {
        console.log(subject); // Log the updated value of subject
    }, [subject]);
    return (
        <>
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