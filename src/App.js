import { useState, useEffect, useContext } from 'react';
import './App.css';
import { Header } from './components/Header';
import {DarkMode } from '@chakra-ui/react'
import { HomeSignedIn } from './components/HomeSignedIn';
import { HomeNotSignedIn } from './components/HomeNotSignedIn';
import { signInWithGoogle, auth } from './components/firebase'; 

import { useAuthState } from 'react-firebase-hooks/auth';
import { Footer } from './components/Footer';



function App() {
  const [user] = useAuthState(auth);

  const SignIn = () =>{
    signInWithGoogle();
  }

  const SignOut = () =>{
    auth.signOut(); 
  }

  return (
    <div>
        <div className="App" >
        <Header signIn={SignIn} loginState={user} signOut={SignOut}/>
        {user ? <HomeSignedIn name={auth.currentUser.displayName} signOut={SignOut}/> : <HomeNotSignedIn signIn={SignIn}/>}
        <Footer />
      </div>
    </div>
  );
}

export default App;
