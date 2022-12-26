//Imports
import React from 'react';
import { Button, Switch, FormControl, FormLabel, useColorMode} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


/**
 * component
 * @param signIn -> the function that will be used to sign in an user
 * @param signOut -> the function that will be used to sign out an user
 * @param loginState -> variable that tells us if the user is logged in or out.
 * 
 */
export const Header = ({ signIn, signOut, loginState }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div className='header'>
            {/**Heading*/}
            <h1>Food Planner V2</h1>
            <div>
                {/**
                 * If the user is logged in the signOut button shows, otherwise the singIn button is shown. 
                 * This is checked using the loginState variable.
                */}
                {loginState ?
                    <div>
                        <Button colorScheme='red' onClick={() => signOut()}>Sign out</Button>
                        {/* <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Save automaticly?
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl> */}
                        <div>
                            <FormControl display='flex' alignItems='center' justifyContent='space-evenly'>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    <MoonIcon color='blue.400'/>
                                </FormLabel>
                                <Switch id='email-alerts' onChange={toggleColorMode} />
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    <SunIcon color='yellow.500'/>
                                </FormLabel>
                            </FormControl>
                        </div>
                    </div>
                    : <Button colorScheme='red' onClick={() => signIn()}>Sign in</Button>}
            </div>
        </div>
    );
}