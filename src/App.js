import { useState } from 'react';
import './App.css';
import { AddNewMeal } from './components/AddNewMeal';
import { Header } from './components/Header';
import {Plan} from './components/Plan';
import { ChakraProvider, Button } from '@chakra-ui/react'

function App() {
  const [clicked, setClicked] = useState(false);
  const hide = () =>{
    setClicked(false);
  }

  return (
    <ChakraProvider>
      <div className="App">
        <Header hide= {hide}/>
        <Plan />
        <div>
          {clicked ? <AddNewMeal hide= {hide}/> : <div>
            <Button colorScheme='blue' onClick={()=> setClicked(true)}>Add new meal</Button>
        </div>}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
