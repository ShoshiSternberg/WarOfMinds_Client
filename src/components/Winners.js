import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Winners=({winners})=> {
  return (
    <div>
      <h3>---winners---</h3>
        {winners
          .map((index,winner) => (
            <button 
              key={index}>
              {winner}
            </button>
          ))
      }
    </div>   

  );
}

export default Winners;