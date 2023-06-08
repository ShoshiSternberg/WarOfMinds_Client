import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const GameResults=({winners})=> {
    const [player,setPlayer]=useState();
    useEffect(() => {
        axios.get(`https://localhost:7203/api/Player`)
            .then(res => {                
                setPlayer(res.data);                
            })

    }, [])

  return (
    <div>
      <h3>Game Results</h3>
        <div>
            <span>new rating :{player.EloRating}</span>
            
        </div>
    </div>   

  );
}

export default GameResults;