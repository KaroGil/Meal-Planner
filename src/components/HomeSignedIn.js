import { useState } from 'react';
import { AddNewMeal } from './AddNewMeal';
import {Plan} from './Plan';
import { Button } from '@chakra-ui/react'

export const HomeSignedIn = ({name,signOut}) => {
    const [clicked, setClicked] = useState(false);
    const hide = () =>{
        setClicked(false);
      }
  return (
    <div>
        <h1>Welcome  {name}!</h1>
        <div>
          {clicked ? <AddNewMeal hide= {hide}/> : <div>
            <Button colorScheme='blue' onClick={()=> setClicked(true)}>Add new meal</Button>
            </div>}
        </div>
        <div>
          <Plan />
        </div>
    </div>

  );
}
