import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxcVhHDm5OQREPRJDOcnFsJqriyqVEJJ4",
    authDomain: "linkedin-clone-25e9a.firebaseapp.com",
    projectId: "linkedin-clone-25e9a",
    storageBucket: "linkedin-clone-25e9a.appspot.com",
    messagingSenderId: "995836438808",
    appId: "1:995836438808:web:f48d18e18aabca9cf4566d"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };