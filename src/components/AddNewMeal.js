import React, { useState } from "react";
import firestore from 'firebase/compat/firestore';
import { db } from './firebase';
import { Button,FormControl,
    FormLabel, Select , Input} from '@chakra-ui/react'

export const AddNewMeal = ({ hide }) => {
    const [meal, setMeal] = useState("");
    const [type, setType] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (meal && type) {
            const userRef = db.collection('food').add({
                Meal: meal,
                Type: type,
            });

            hide();
        } else {
            alert("please enter value in all fields")
        }

    }

    return (
        <div>
            <form onSubmit={submit}>
                <FormControl>
                    <FormLabel>New Meal</FormLabel>
                    <div>
                        <Input type="text" placeholder="type in name of new meal..." value={meal} onChange={(e)=> setMeal(e.target.value)}/>
                    </div>
                    <Select placeholder='Select Type' onChange={(e)=> setType(e.target.value)}>
                        <option value='Default'>Choose type</option>
                        <option value='Vegetarian'>Vegetarian</option>
                        <option value='Vegan'>Vegan</option>
                        <option value='MeatEater'>Meat eater</option>
                        <option value='other'>other</option>
                    </Select>
                    <div>
                        <Button colorScheme='blue' size='sm' onClick={submit}>submit</Button>
                    </div>
                </FormControl>
                <div>
                    <Button type='submit' colorScheme='blue' size='xs' onClick={() => hide()}>Back</Button>
                </div>
            </form>
        </div>


    );
}