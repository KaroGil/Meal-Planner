import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ChakraProvider } from '@chakra-ui/react'
import { HomeSignedIn } from './components/HomeSignedIn';
import { HomeNotSignedIn } from './components/HomeNotSignedIn';

function App() {
  const [signInValue, setIn] = useState(false); //signInValue => true if signed in and false if not

  const SignIn = () =>{
    setIn(true);
  }
  const SignOut = () =>{
    setIn(false);
}

  return (
    <ChakraProvider>
      <div className="App">
        <Header signIn={SignIn} loginState={signInValue} signOut={SignOut}/>
        {signInValue ? <HomeSignedIn name="Karo" signOut={SignOut}/> : <HomeNotSignedIn signIn={SignIn}/>}
      </div>
    </ChakraProvider>
  );
}

export default App;
