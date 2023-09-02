import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDkSjlzHaCtBtHJ-JGa1sp6Qqo0ng6tgGM",
  authDomain: "e-commerce-c2c28.firebaseapp.com",
  projectId: "e-commerce-c2c28",
  storageBucket: "e-commerce-c2c28.appspot.com",
  messagingSenderId: "156997306762",
  appId: "1:156997306762:web:4f81772b5ba8d834f5a073"
};

const app= firebase.initializeApp(firebaseConfig); // react app will be connected to firebase using the credentials in firebaseConfig
export const mydb= firebase.firestore();    // helps to connect to firestore db

// getAuth()---> will help our react application to connect to authentication which is inside the firebase
// GoogleAuthProvider is a class that will help our react appln to connect to Google Authentication
// if want to connect to facebook use facebookAuthProvider

export const auth= getAuth(app) // authentification
export const provider= new GoogleAuthProvider() //Google Authentification  // if you want to create an object of a class we use 'new' keyword

export const signInWithGoogle = ()=>{
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
}