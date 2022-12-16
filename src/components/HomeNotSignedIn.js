import { useState } from 'react';
import { Button,Heading  } from '@chakra-ui/react'



export const HomeNotSignedIn = ({signIn}) => {

  return (
    <div className='home'>
        <Heading >Welcome to Meal-Planner!</Heading >
        <Heading size='lg'>Please sign in!</Heading >
        <br/>
        <Button colorScheme='red' onClick={() => signIn()}>Sign in</Button>
    </div>

  );
}
