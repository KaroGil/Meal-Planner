import { useState, useEffect, useContext } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HomeSignedIn } from './components/HomeSignedIn';
import { HomeNotSignedIn } from './components/HomeNotSignedIn';
import { signInWithGoogle, auth } from './components/firebase'; 

import { useAuthState } from 'react-firebase-hooks/auth';
import { Footer } from './components/Footer';
import { AddNewMeal } from './components/AddNewMeal';



function App() {
  const [user] = useAuthState(auth);

  const SignIn = () =>{
    signInWithGoogle();
  }

  const SignOut = () =>{
    auth.signOut(); 
  }


  const [clicked, setClicked] = useState(false);
  const [plan, setPlan] = useState(false);
  const click = () =>{
    setClicked(true);
  }
  const hide = () =>{
    setClicked(false);
  }


  return (
    <div>
        <div className="App" >
        {/* Header component */}
        {/* {user ? <Header signIn={SignIn} loginState={user} signOut={SignOut} name={auth.currentUser.displayName} isClicked={click} plan={}/> : <Header signIn={SignIn} loginState={user} signOut={SignOut}/> } */}
        
        {/* If user loged in the homesignedin page will show with the signout propmt, if not the homenotsignedin with a signin promopt will be shown */}
        {user ?  <HomeSignedIn name={auth.currentUser.displayName} SignOut={SignOut}/> : <HomeNotSignedIn signIn={SignIn}/>}
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
