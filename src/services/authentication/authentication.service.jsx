import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDzHngQeYHZpx8j8rhK3SWGrL7z-ahsNDA",
    authDomain: "mealstogo-3d849.firebaseapp.com",
    projectId: "mealstogo-3d849",
    storageBucket: "mealstogo-3d849.appspot.com",
    messagingSenderId: "97590189562",
    appId: "1:97590189562:web:13f0a1aab2b553b4e89843",
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

export const loginRequest = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
