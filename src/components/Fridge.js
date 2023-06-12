

export const Fridge = ({user}) =>{
    const [fridge, setFridge] = useState(null);

    const db = firebase.firestore();        
    const usersCollectionRef = doc(db, 'users', user);

    //The fridge variable should contain all the previously added fridge items and the new fridge item to add

    const update = async () => {
        await updateDoc(usersCollectionRef, {
            "fridge": fridge,
        });
    }



    const submit = (e) => {
        e.preventDefault();

        if (meal && type) {
            const userRef = db.collection('users').updateDoc({
                Meal: meal,
                Type: type,
            });

            hide();
        } else {
            alert("please enter value in all fields")
        }

    }


    return(<>
        <h1>What's in your fridge?</h1>

        <form onSubmit={submit}>
                <FormControl>
                    <FormLabel>Add item</FormLabel>
                    <div>
                        <Input type="text" placeholder="type in name of item..." value={meal} onChange={(e)=> setMeal(e.target.value)}/>
                    </div>
                    <div>
                        <Button colorScheme='blue' size='sm' onClick={submit}>submit</Button>
                    </div>
                </FormControl>
            </form>
    
    </>);
}