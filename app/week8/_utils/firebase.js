// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-oljTUKCtsZNZHomElqjwy67OTrPWrU",
  authDomain: "cprg306-assignments-39ef3.firebaseapp.com",
  projectId: "cprg306-assignments-39ef3",
  storageBucket: "cprg306-assignments-39ef3.appspot.com",
  messagingSenderId: "346945780651",
  appId: "1:346945780651:web:46abfd225c512573ecf0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);