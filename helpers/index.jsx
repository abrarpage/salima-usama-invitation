// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMmxczbhRnyAsXdQ8ZBDLsyyo3_yA8MB0",
  authDomain: "wedding-bb272.firebaseapp.com",
  projectId: "wedding-bb272",
  storageBucket: "wedding-bb272.appspot.com",
  messagingSenderId: "563197225516",
  appId: "1:563197225516:web:d358f2bbe96872e110ff89",
  measurementId: "G-TWX14X22GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
