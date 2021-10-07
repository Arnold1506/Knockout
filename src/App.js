import React from 'react'
import { useState,useEffect } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';

const App=()=> {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [userName,setUserName]=useState('');
    useEffect(()=>{
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation==='1') {
          setIsLoggedIn(true);
        }
      },[]);

    const logoutHandler=()=>{
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn','0');
    };

    const loginHandler=()=>{
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn','1'); 
    };

    const getUserName=(username)=>{
      setUserName(username);
      loginHandler();
    }
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} userName={userName} logoutHandler={logoutHandler} />
      {!isLoggedIn && <Login getUserName={getUserName} />}
      {isLoggedIn && <Homepage />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
