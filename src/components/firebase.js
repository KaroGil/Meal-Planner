import Firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBxqH6maLv47hd19Pu7j1uPXUeN1B_ttRc",
    authDomain: "foodplanner-1cca5.firebaseapp.com",
    projectId: "foodplanner-1cca5",
    storageBucket: "foodplanner-1cca5.appspot.com",
    messagingSenderId: "649261167029",
    appId: "1:649261167029:web:2af821ac19caddd01aa9fc"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();

export {firebase, db};