// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0VMKXcod7gYwh34iQvue9o2K4jAwcMJ0",
  authDomain: "aulasm2k25.firebaseapp.com",
  projectId: "aulasm2k25",
  storageBucket: "aulasm2k25.firebasestorage.app",
  messagingSenderId: "120111143579",
  appId: "1:120111143579:web:b060453c9cca4c911cc43e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth =  getAuth(app);
export const db = getFirestore(app);