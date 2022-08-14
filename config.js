import {API_KEY} from 'react-native-dotenv';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compate/firestore';



const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "rn-todo-39f53.firebaseapp.com",
    projectId: "rn-todo-39f53",
    storageBucket: "rn-todo-39f53.appspot.com",
    messagingSenderId: "371350794857",
    appId: "1:371350794857:web:ae18b2ce690dcd7c46e8f8",
    measurementId: "G-ZYM0L21XE2"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
};

export { firebase };