import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYEGXar--lUdhrolkuYvZaeXuoVywe8R0",
  authDomain: "babybundles-app.firebaseapp.com",
  projectId: "babybundles-app",
  storageBucket: "babybundles-app.appspot.com",
  messagingSenderId: "1081406349461",
  appId: "1:1081406349461:web:1b588a3b77eb059667bb9c",
  measurementId: "G-9JYE7RQS8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
