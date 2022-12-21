import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ChakraProvider } from '@chakra-ui/react'
import { HomeSignedIn } from './components/HomeSignedIn';
import { HomeNotSignedIn } from './components/HomeNotSignedIn';
import { signInWithGoogle, auth } from './components/firebase';
import Firebase from 'firebase/compat/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth';


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
    <ChakraProvider>
      <div className="App">
        <Header signIn={SignIn} loginState={user} signOut={SignOut}/>
        {user ? <HomeSignedIn name={auth.currentUser.displayName} signOut={SignOut}/> : <HomeNotSignedIn signIn={SignIn}/>}
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
