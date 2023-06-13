import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const GameResults=({winners,preRating,UpdatedRating})=> {
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
          <div className='TopPlayers winners'>
          <ul className='subjects'>
          {winners.map((element, index) => (
            <li key={index}>
              <button
                onClick={e => {
                  setSubject(parseInt(e.target.value));
                }}
                className='winner'
                
              >
                {element}
              </button>
            </li>
          ))}
          </ul>
          </div>
            <span>pre rating :{preRating}</span>
            <span>updated rating: {UpdatedRating}</span>
            
        </div>
    </div>   

  );
}

export default GameResults;