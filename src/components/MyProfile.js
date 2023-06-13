import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfilePage from './profile';

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  
  useEffect(() => {
    let user = JSON.parse(sessionStorage.user);
   axios.get(`https://localhost:7203/api/Player/` + user.playerID)
      .then(res => {
        console.log(res.data);
        setMyProfile(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <ProfilePage user={JSON.parse(sessionStorage.user)} setName={setName} setEmail={setEmail} setAddress={setAddress} />
  );
}

export default MyProfile;