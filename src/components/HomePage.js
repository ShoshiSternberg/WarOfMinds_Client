import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import FormDialog from './FormDialog';

const HomePage = () => {
  const [isLogged, setIsLogged] = useState(false);

  let navigate = useNavigate();
  const enterToGame = () => {
    navigate('/Game');
  };

  return (
    <>
      <div className="App">
        {!isLogged && <FormDialog setIsLogged={setIsLogged} /> } {/* Render the FormDialog component when isLogged is false */}
        
        <div className="content">
          {isLogged ? (
            <>
              <button onClick={() => setIsLogged(false)}>Logout</button>
              <button onClick={enterToGame}>Enter the game!</button>
            </>
          ) : (
            <h2>Please log in or register</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;