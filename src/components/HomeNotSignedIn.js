import { useState } from 'react';
import { Button,Heading  } from '@chakra-ui/react'


export const HomeNotSignedIn = ({signIn}) => {

  return (
    <div className='home'>
        <Heading >Welcome to Meal-Planner!</Heading >
        <Heading size='lg'>Please sign in!</Heading >
        <br/>
        <Button colorScheme='red' onClick={() => signIn()}>Sign in</Button>
        {/* Here instead of just changing the signed in value to true, should be a sign in and authentication process that in the end sets the login vaule to true and the user is logged in */}
    </div>

  );
}
