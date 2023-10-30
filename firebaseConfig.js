// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl439nV8XQvFX53R40tDTJWqsU1Xt-5XU",
  authDomain: "baby-ecommerce-8c5e4.firebaseapp.com",
  projectId: "baby-ecommerce-8c5e4",
  storageBucket: "baby-ecommerce-8c5e4.appspot.com",
  messagingSenderId: "6497750761",
  appId: "1:6497750761:web:dbd2ef9843ac9d60582a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)