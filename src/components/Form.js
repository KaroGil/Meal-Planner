import React, { useEffect, useState } from 'react';
import { Plan } from './Plan';
import firestore from 'firebase/compat/firestore';
import { firebase, db } from './firebase';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button,
    SimpleGrid} from '@chakra-ui/react'



export const Form = ({ day, handle, hide }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const getMealsFromFirebase = [];
        const db = firebase.firestore();
        const sub = db.collection('food').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getMealsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setMeals(getMealsFromFirebase);
            setLoading(false);
        });
        return () => sub();
    }, [loading]);

    if (loading) {
        return <h1>loading firebase data... </h1>
    }

    const set = (meal, t) => {
        setName(meal);
        setType(t);
        console.log(name,type)
        const pass = name && type;
        if (pass) submit();

    }

    const submit = () => {
        const pass = name && type;
        if (pass) {
            handle(day, { name: day, meal: name, type: type });
        }
        else alert("You have to enter the values to submit the edit")

    }

    return (
        <div className='container'>
             <div>
                    <Button colorScheme='blue' size='sm' onClick={() => hide()}>Back</Button>
            </div>
            <h1>Meals: </h1>
            {meals.length > 0 ? (
                meals.map((meal) =>
                    // <div key={meal.key}>
                    //     <h2>{meal.Meal}</h2>
                    //     <p><i>{meal.Type}</i></p>
                    //     <button className='btn-submit' onClick={() => set(meal.Meal, meal.Type)}>Add</button>
                    // </div>
                    <div key={meal.key}>
                        <Card maxW='sm'>
                            <CardBody>

                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{meal.Meal}</Heading>
                                    <Text fontSize='sm'>
                                        <i>{meal.Type}</i>
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue' size='sm' onClick={() => set(meal.Meal, meal.Type)}>
                                        Add
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </div>
                ))
                : (<h1>no meals in db</h1>)}
        </div>
    )

}