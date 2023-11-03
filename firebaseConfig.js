
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
<<<<<<< HEAD
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Import the functions you need from the SDKs you need

=======
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
>>>>>>> 0d291aab97ee425e13090be48ba2960439c577d9
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYEGXar--lUdhrolkuYvZaeXuoVywe8R0",
  authDomain: "babybundles-app.firebaseapp.com",
  projectId: "babybundles-app",
  storageBucket: "babybundles-app.appspot.com",
  messagingSenderId: "1081406349461",
  appId: "1:1081406349461:web:1b588a3b77eb059667bb9c",
<<<<<<< HEAD
  measurementId: "G-9JYE7RQS8Y"
=======
  measurementId: "G-9JYE7RQS8Y",
>>>>>>> 0d291aab97ee425e13090be48ba2960439c577d9
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
<<<<<<< HEAD
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
=======

export const auth = getAuth(app);
export const db = getFirestore(app);
>>>>>>> 0d291aab97ee425e13090be48ba2960439c577d9
