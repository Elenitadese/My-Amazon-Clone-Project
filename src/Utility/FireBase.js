 // FireBase.js
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKmp5EjrxLHMjdzOvRY-HCKORWq4xAxQQ",
  authDomain: "clone-78854.firebaseapp.com",
  projectId: "clone-78854",
  storageBucket: "clone-78854.firebasestorage.app",
  messagingSenderId: "189180966784",
  appId: "1:189180966784:web:c35e2c5338bef1d2547365",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

// next steps  exporting 
export const auth = getAuth(app);
export const db = getFirestore(app);

// Copy your config keys (apiKey, authDomain, etc.) into FireBase.js.


