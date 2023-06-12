import { Avatar, AvatarBadge, AvatarGroup, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
import { AddNewMeal } from './AddNewMeal';

export const DropDownMenu = ({name, isClicked, signOut, hide}) =>{

  return(
    <Menu>
        <MenuButton>
            <Avatar name={name} src='https://bit.ly/broken-link' /> 
        </MenuButton>
        <MenuList>
            <MenuGroup title='Profile'>
            <MenuItem fontSize='lg' onClick={() => hide()}>Week plan</MenuItem>
            <MenuItem fontSize='lg'>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Meals'>
            <MenuItem fontSize='lg' onClick={() => isClicked()}>Add new</MenuItem>
            <MenuDivider />
            <MenuItem fontSize='lg' colorScheme='red' onClick={() => signOut()}>Sign out</MenuItem>
            </MenuGroup>
        </MenuList>
    </Menu>
  );
}