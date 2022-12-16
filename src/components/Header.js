import React from 'react';
import {Button } from '@chakra-ui/react'
import { signInWithGoogle } from './firebase';


export const Header = ({signIn, signOut, loginState}) => {
    return (
        <div className='header'>
            <h1>Food Planner V2</h1>
            <div>
                {loginState ? <Button colorScheme='red'  onClick={() => signOut()}>Sign out</Button> : <Button colorScheme='red'  onClick={() => signIn()}>Sign in</Button>}
            </div>
        </div>
    );
}