import React, { useEffect, useState } from 'react';
import firestore from 'firebase/compat/firestore';
import { firebase, db } from './firebase';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import '../App.css';



export const Form = ({ day, handle, hide }) => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const getMealsFromFirebase = [];
        const db = firebase.firestore();
        const sub = db.collection('food').orderBy('Meal').onSnapshot((querySnapshot) => {
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


    return (
        <Stack>
            <Button colorScheme='blue' size='sm' onClick={() => hide()}>Back</Button>
            <Tabs>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Meat</Tab>
                    <Tab>Vegan</Tab>
                    <Tab>Vegetarian</Tab>
                    <Tab>Other</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    {/* All */}
                    <Stack direction='row' wrap='wrap' gap="10">
                        {meals.length > 0 ? (
                            meals.map((meal) => 
                                <div key={meal.key}>
                                    <Card maxW='sm' minW='xs' width='xs' h="3xs">
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
                                                <Button variant='solid' colorScheme='blue' size='sm' onClick={() => handle(day, { name: day, meal: meal.Meal, type: meal.Type })}>
                                                    Add
                                                </Button>
                                            </ButtonGroup>
                                        </CardFooter>
                                    </Card>
                                </div>
                            ))
                            : (<h1>no meals in db</h1>)}
                    </Stack>
                    </TabPanel>
                    <TabPanel>
                    {/* Meat */}
                    <Stack direction='row' wrap='wrap' gap="10">
                        {meals.length > 0 ? (
                            meals.map((meal) => {
                                if(meal.Type == 'MeatEater'){
                                    return(<div key={meal.key}>
                                        <Card maxW='sm' minW='xs' width='xs' h="3xs">
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
                                                    <Button variant='solid' colorScheme='blue' size='sm' onClick={() => handle(day, { name: day, meal: meal.Meal, type: meal.Type })}>
                                                        Add
                                                    </Button>
                                                </ButtonGroup>
                                            </CardFooter>
                                        </Card>
                                    </div>);
                                }
                                }
                        
                            ))
                            : (<h1>no meals in db</h1>)}
                    </Stack>
                    </TabPanel>
                    <TabPanel>
                    {/* Vegan */}
                    <Stack direction='row' wrap='wrap' gap="10">
                        {meals.length > 0 ? (
                            meals.map((meal) => {
                                if(meal.Type == 'Vegan'){
                                    return(<div key={meal.key}>
                                        <Card maxW='sm' minW='xs' width='xs' h="3xs">
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
                                                    <Button variant='solid' colorScheme='blue' size='sm' onClick={() => handle(day, { name: day, meal: meal.Meal, type: meal.Type })}>
                                                        Add
                                                    </Button>
                                                </ButtonGroup>
                                            </CardFooter>
                                        </Card>
                                    </div>);
                                }
                                }
                        
                            ))
                            : (<h1>no meals in db</h1>)}
                    </Stack>
                    </TabPanel>
                    <TabPanel>
                    {/* Vegetarian */}
                    <Stack direction='row' wrap='wrap' gap="10">
                        {meals.length > 0 ? (
                            meals.map((meal) => {
                                if(meal.Type == 'Vegetarian'){
                                    return(<div key={meal.key}>
                                        <Card maxW='sm' minW='xs' width='xs' h="3xs">
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
                                                    <Button variant='solid' colorScheme='blue' size='sm' onClick={() => handle(day, { name: day, meal: meal.Meal, type: meal.Type })}>
                                                        Add
                                                    </Button>
                                                </ButtonGroup>
                                            </CardFooter>
                                        </Card>
                                    </div>);
                                }
                                }
                        
                            ))
                            : (<h1>no meals in db</h1>)}
                    </Stack>
                    </TabPanel>
                    <TabPanel>
                    {/* Other */}
                    <Stack direction='row' wrap='wrap' gap="10">
                        {meals.length > 0 ? (
                            meals.map((meal) => {
                                if(meal.Type == 'other'){
                                    return(
                                    <div key={meal.key}>
                                        <Card maxW='sm' minW='xs' width='xs' h="3xs">
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
                                                    <Button variant='solid' colorScheme='blue' size='sm' onClick={() => handle(day, { name: day, meal: meal.Meal, type: meal.Type })}>
                                                        Add
                                                    </Button>
                                                </ButtonGroup>
                                            </CardFooter>
                                        </Card>
                                    </div>);
                                }
                                }
                        
                            ))
                            : (<h1>no meals in db</h1>)}
                    </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </Stack>
    )

}