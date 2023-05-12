import React, { useState, useEffect } from 'react';
import { Form } from './Form';
import { firebase, auth} from './firebase';
import { getDatabase, ref, set } from "firebase/database";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Progress} from '@chakra-ui/react'

export const Plan = () => {
    const [monday, setMonday] = useState({ name: "Monday", meal: "", type: "" });
    const [tuesday, setTuesday] = useState({ name: "Tuesday", meal: "", type: "" });
    const [wednesday, setWednesday] = useState({ name: "Wednesday", meal: "", type: "" });
    const [thursday, setThursday] = useState({ name: "Thursday", meal: "", type: "" });
    const [friday, setFriday] = useState({ name: "Friday", meal: "", type: "" });
    const [saturday, setSaturday] = useState({ name: "Saturday", meal: "", type: "" });
    const [sunday, setSunday] = useState({ name: "Sunday", meal: "", type: "" });

    const [currentHover, setCurrentHover] = useState({ name: "", meal: "", type: "" });
    const [savedHover, setSavedHover] = useState({ name: "", meal: "", type: "" });



    const [edit, setEdit] = useState(false);
    const [today, setToday] = useState("default");
    const [saved, setSaved] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

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

    const db = firebase.firestore();        
    const usersCollectionRef = collection(db, 'users');

    const Random = (day) => {
        //all meals in the db to an array and then pic a random item from that array

        // const getMealsFromFirebase = [];
        // const sub = db.collection('food').onSnapshot((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         getMealsFromFirebase.push({
        //             ...doc.data(),
        //             key: doc.id,
        //         });
        //     });
        //     setMeals(getMealsFromFirebase);
        // });

        setRandom(meals[Math.floor(Math.random() * meals.length)]);
        setDay(day, { name: day, meal: randomMeal.Meal, type: randomMeal.Type });
    }

    const reset = async (id) => {
        if(saved['state'] == 'true'){
            const userDoc = doc(db, 'users', id);
            await deleteDoc(userDoc);

            setMonday({ name: "Monday", meal: "", type: "" });
            setTuesday({ name: "Tuesday", meal: "", type: "" });
            setWednesday({ name: "Wednesday", meal: "", type: "" });
            setThursday({ name: "Thursday", meal: "", type: "" });
            setFriday({ name: "Friday", meal: "", type: "" });
            setSaturday({ name: "Saturday", meal: "", type: "" });
            setSunday({ name: "Sunday", meal: "", type: "" });

            setSaved(false);
            setLoading(true);
        }else{
            console.log("Nothing to delete.")
        }
    }

    const createUserData = async () => {
        await addDoc(usersCollectionRef, 
            {
                name: auth.currentUser.displayName,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
                sunday: sunday
            });

    }

    const updateUserData = async (id) => {
        const userDoc = doc(db, 'users', id);
        const newFields = {
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday,
            sunday: sunday}
        await updateDoc(userDoc, newFields);
    }

    const save = async () => {

        if(saved['state'] == 'true'){
            //update
            updateUserData(saved['id']);
            console.log("updated!");
        }else{
            //create
            createUserData();
            console.log("saved new!");
        }

        setLoading(true);

    }

    //USE-EFFECT
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //foods
        const getMealsFromFirebase = [];
        const sub1 = db.collection('food').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getMealsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setMeals(getMealsFromFirebase);
        });
        //users
        const users = [];
        const sub = db.collection('users').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data()['name']==auth.currentUser.displayName){
                    users.push({
                        ...doc.data(),
                        key: doc.id,
                    });
                }
            });
            setUserInfo(users);
            setLoading(false);
            if(userInfo.length > 0){
                const dict = userInfo[0];
                setMonday({ name: "Monday", meal:  dict['monday']['meal'], type:  dict['monday']['type'] });
                setTuesday({ name: "Tuesday", meal: dict['tuesday']['meal'], type: dict['tuesday']['type'] });
                setWednesday({ name: "Wednesday", meal: dict['wednesday']['meal'], type: dict['wednesday']['type'] });
                setThursday({ name: "Thursday", meal: dict['thursday']['meal'], type: dict['thursday']['type'] });
                setFriday({ name: "Friday", meal: dict['friday']['meal'], type: dict['friday']['type'] });
                setSaturday({ name: "Saturday", meal: dict['saturday']['meal'], type: dict['saturday']['type'] });
                setSaved({state: 'true', id: dict['key']});
            }else{console.log("Nothing saved in database, so nothing to get.")}
        });
        return () => sub();
    }, [loading]);

    if (loading) {
        return <h1>loading firebase data for user... </h1>
    }


    //trying to do draggable



    function start(d) {
        console.log("over");   
        setCurrentHover({ name: d.name, meal: d.meal, type: d.type });
    }
    function end(d){
        console.log("out" + d.name);
        replace(currentHover,d);
    }

    const dragOver = (d) => {
        setCurrentHover({ name: d.name, meal: d.meal, type: d.type });
    }

    const replace = (dayFrom, dayTo) => {
        setDay(dayFrom.name,{ name: dayFrom.name, meal: dayTo.meal, type: dayTo.type });
        setDay(dayTo.name,{ name: dayTo.name, meal: dayFrom.meal, type: dayFrom.type });
    }

    return (
        <> <div>
            <br/>
            <Text><b>Week planned:</b></Text>
            <Progress hasStripe value={50} />
            </div>
            <br/>
            <div className='edit'>
                <Stack w="100%">
                    {edit ? <Form day={today} handle={setDay} hide={hide} /> : 
                    <div className='layout'>
                    {days.map((day) =>
                        <div key={day.key} className='drag' draggable onDragStart={()=>start()} onDragEnd={()=> end(day)} onDragOver={()=> dragOver(day)}>
                            <Card maxW='m' minH='xs' maxH='m'>
                                    <CardBody >    
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
                </Stack>
            </div>
            <div>
                <br/>
                <Stack direction="row">
                    <Button colorScheme='blue' onClick={() => save()}>Save Meal Plan</Button>
                    <Button colorScheme='blue' onClick={() => reset(saved['id'])}>Reset Meal Plan</Button>
                </Stack>
            </div>
        </>
    );
}