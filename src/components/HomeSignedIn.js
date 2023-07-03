import { useState } from 'react';
import { AddNewMeal } from './AddNewMeal';
import {Plan} from './Plan';
import { Header } from './Header';

export const HomeSignedIn = ({name, SignIn, user, SignOut}) => {
    const [clicked, setClicked] = useState(false);
    const click = () =>{
      setClicked(true);
    }
    const hide = () =>{
        setClicked(false);
    }
  return (
    <div>
        <Header signIn={SignIn} loginState={true} signOut={SignOut} name={name} isClicked={click} hide={hide} user={user}/>
        <h1>Welcome  {name}!</h1>
        <div>
          {clicked ? <AddNewMeal hide= {hide}/> : <Plan />}
        </div>
    </div>

  );
}
