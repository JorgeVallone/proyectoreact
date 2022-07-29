// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEmLVnsNjZoC07qK4aoxtTSHNrw0tHtCY",
  authDomain: "reactjs-37075-6d239.firebaseapp.com",
  projectId: "reactjs-37075-6d239",
  storageBucket: "reactjs-37075-6d239.appspot.com",
  messagingSenderId: "507655459688",
  appId: "1:507655459688:web:14dd68851a2c6b7a80bcdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)