// import React from 'react';
//import { Link, Navigate, Outlet ,useNavigate} from 'react-router-dom';

// const HomePage=()=> {
//   let navigate=useNavigate();
//   const enterToGame=()=>{
//     navigate('/Game');
//   }
//   return (
//     <div>
//       <button onClick={enterToGame}>enter to the game!

//       </button>
//       <header/>
//       <Outlet/>
//       <footer/>
//     </div>


//   );
// }

// export default HomePage;

import Login_Register from './Login_Register';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  
  const handleLogin = () => {
    // Perform login logic and set isLogged to true upon successful authentication
    setIsLogged(true);
    // Hide the form after login
    setIsFormVisible(false);
  };
  const handleRegister = () => {
    // Perform login logic and set isLogged to true upon successful authentication
    setIsLogged(true);
    
    // Hide the form after login
    setIsFormVisible(false);
  };
  const handleLogout = () => {
    // Perform logout logic and set isLogged to false
    setIsLogged(false);
    // Show the form after logout
    setIsFormVisible(true);
  };

  let navigate=useNavigate();
  const enterToGame=()=>{
    navigate('/Game');
  }

  const ChangeFormVisible=(bool)=>{
    setIsFormVisible(bool);
    setIsLogged(!bool);
  }
  return (
    <>
    <div className={`App ${isLogged ? 'enabled' : 'disabled'}`}>
      {isFormVisible && (
        <div className="form-container">
            {/* Input fields and buttons for login/register */}
            <Login_Register ChangeFormVisible={ChangeFormVisible} />     
          
        </div>
      )}
      <div className="content">        
        {isLogged && <>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={enterToGame}>enter to the game!</button></>
        }
      </div>
      
      
    </div>
    
    </>
  );
};

export default HomePage;