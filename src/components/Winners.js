import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Winners=()=> {
  return (
    <div>
      <button>winner
      <Link to={{ pathname: "/Game", state: { value: 1 } }}>to game</Link>
      </button>
      <header/>
      <Outlet/>
      <footer/>
    </div>
    

  );
}

export default Winners;