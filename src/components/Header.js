import React from 'react';
import { Button, Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { signInWithGoogle } from './firebase';


export const Header = ({ signIn, signOut, loginState }) => {
    return (
        <div className='header'>
            <h1>Food Planner V2</h1>
            <div>
                {loginState ? 
                <div>
                    <Button colorScheme='red' onClick={() => signOut()}>Sign out</Button> 
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Save automaticly?
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                </div>
                : <Button colorScheme='red' onClick={() => signIn()}>Sign in</Button>}
            </div>
        </div>
    );
}