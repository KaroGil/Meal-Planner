import React, { useState } from 'react';
import { Form } from './Form';
import { firebase} from './firebase';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Progress} from '@chakra-ui/react'

export const Plan = () => {
    const [monday, setMonday] = useState({ name: "Monday", meal: "", type: "" });
    const [tuesday, setTuesday] = useState({ name: "Tuesday", meal: "", type: "" });
    const [wednesday, setWednesday] = useState({ name: "Wednesday", meal: "", type: "" });
    const [thursday, setThursday] = useState({ name: "Thursday", meal: "", type: "" });
    const [friday, setFriday] = useState({ name: "Friday", meal: "", type: "" });
    const [saturday, setSaturday] = useState({ name: "Saturday", meal: "", type: "" });
    const [sunday, setSunday] = useState({ name: "Sunday", meal: "", type: "" });

    const [edit, setEdit] = useState(false);
    const [today, setToday] = useState("default");

    const hide = () => {
        setEdit(false);
    }

    const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandom] = useState();

    const setDay = (day, value) => {
        switch (day) {
            case "Monday":
                setMonday(value);
                break;
            case "Tuesday":
                setTuesday(value);
                break;
            case "Wednesday":
                setWednesday(value);
                break;
            case "Thursday":
                setThursday(value);
                break;
            case "Friday":
                setFriday(value);
                break;
            case "Saturday":
                setSaturday(value);
                break;
            case "Sunday":
                setSunday(value);
                break;
            default:
                break;
        }
        setEdit(false);
    }

    const Editing = (day) => {
        setEdit(true);
        setToday(day);
    }

    const Random = (day) => {
        //all meals in the db to an array and then pic a random item from that array

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
        });

        setRandom(meals[Math.floor(Math.random() * meals.length)]);
        setDay(day, { name: day, meal: randomMeal.Meal, type: randomMeal.Type });
    }

    const [s, setS] = useState(0);


    return (
        <> <div>
            <br/>
            <Text><b>Week planned:</b></Text>
            <Progress hasStripe value={s} />
            </div>
            <br/>
            <div className='edit'>
                <div>
                    {edit ? <Form day={today} handle={setDay} hide={hide} /> : 
                    <div className='layout'>
                    {days.map((day) =>
                        <div key={day.key}>
                            <Card maxW='sm' minH='xs' maxH='sm'>
                                    <CardBody>    
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{day.name}</Heading>
                                            <Text fontSize='sm'>
                                                {day.type}   
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {day.meal}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='solid' colorScheme='blue'size='sm' onClick={() => Editing(day.name)}>
                                                Edit
                                            </Button>
                                            <Button variant='ghost' colorScheme='blue' size='sm' onClick={() => Random(day.name)}>
                                                Random
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                            </Card>
                        </div>
                        )}
                    </div>
                    
                    }
                </div>
            </div>
        </>
    );
}