import { useState } from 'react';
import { Button,Heading  } from '@chakra-ui/react'
import { Header } from './Header';

export const HomeNotSignedIn = ({signIn, user, SignOut}) => {

  return (
    <div className='home'>
        <Header signIn={signIn} loginState={false} signOut={SignOut}/>
        <Heading >Welcome to Meal-Planner!</Heading >
        <Heading size='lg'>Please sign in!</Heading >
        <br/>
        <Button colorScheme='red' onClick={() => signIn()}>Sign in</Button>
    </div>

  );
}
