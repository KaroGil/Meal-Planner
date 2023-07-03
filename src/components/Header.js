//Imports
import React from 'react';
import { Button, Switch, FormControl, FormLabel, useColorMode, Stack } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, AvatarGroup, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
import { DropDownMenu } from './DropDown.js';

/**
 * component
 * @param signIn -> the function that will be used to sign in an user
 * @param signOut -> the function that will be used to sign out an user
 * @param loginState -> variable that tells us if the user is logged in or out.
 * 
 */
export const Header = ({ signIn, signOut, loginState, name, isClicked, hide}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div className='header'>
            {/**Heading*/}
            <h1>Food Planner V2</h1>
                {/* {loginState ? <Avatar name={name} src='https://bit.ly/broken-link' /> : null} */}
                {/**
                 * If the user is logged in the signOut button shows, otherwise the singIn button is shown. 
                 * This is checked using the loginState variable.
                */}
                {loginState ?
                    <Stack direction="row">
                        {/* <Button colorScheme='red' onClick={() => signOut()}>Sign out</Button> */}
                        {/* <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Save automaticly?
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl> */}
                        <FormControl display='flex'>
                            <Stack direction="row" alignItems='center' justifyContent='space-evenly'>
                                <FormLabel htmlFor='dark-mode-switch' mb='0'>
                                    <MoonIcon color='blue.400'/>
                                </FormLabel>
                                <Switch id='dark-mode-switch' onChange={toggleColorMode} />
                                <FormLabel htmlFor='dark-mode-switch' mb='0'>
                                    <SunIcon color='yellow.500'/>
                                </FormLabel>
                            </Stack>
                        </FormControl>

                        <DropDownMenu name={name} isClicked={isClicked} signOut={signOut()} hide={hide}/>
                    </Stack>
                    : <Button colorScheme='red' onClick={() => signIn()}>Sign in</Button>}
        </div>
    );
}