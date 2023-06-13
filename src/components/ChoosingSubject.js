import React, { useEffect, useState } from 'react';

import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const { Form, Button } = require("react-bootstrap")
const ChoosingSubject = ({ joinGame, createGame, waitGame, closeConnection }) => {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState();
    //const [difficulty, setDifficulty] = useState();
    useEffect(() => {
        axios.get(`https://localhost:7203/api/Subject`)
            .then(res => {
                setSubjects((res.data));
            })

    }, [])

    return (
        <>
            <button onClick={closeConnection} >exit</button>
            <div className='subjects-container'>
                <ul className='subjects'>
                    {subjects.map((element, index) => (
                        <li key={index}>{
                            <button onClick={e => {
                                setSubject(parseInt(e.target.value));
                                e.target.className=e.target.className+" selectedSubject"
                            }} className='subjectForChoosing' value={element.subejctId}>
                                {element.subjectname}
                            </button>
                        }</li>
                    ))}
                </ul>
                
            </div>
             {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={difficulty}
          onChange={(e)=>setDifficulty(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value={1}>easy</MenuItem>
          <MenuItem value={2}>medium</MenuItem>
          <MenuItem value={3}>hurd</MenuItem>
        </Select>
        <FormHelperText>Difficulty</FormHelperText>
      </FormControl> */}
            <div>
                <Button variant="success" onClick={() => createGame(subject)} disabled={!subject}>create new</Button><br />
                <Button variant="success" onClick={() => joinGame(subject)} disabled={!subject }>join to exist game</Button><br />
                <Button variant="success" onClick={() => waitGame(subject)} disabled={!subject }>wait to start game</Button><br />
            </div>
        </>

    );
}

export default ChoosingSubject;