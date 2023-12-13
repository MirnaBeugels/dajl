// The Firebase component makes a connection with the Firebase service

// Import the needed components, modules & styles
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwBV3VbioG9Hlafr8yTUo8taSDnOEMC8U",
  authDomain: "denk-aan-jou.firebaseapp.com",
  projectId: "denk-aan-jou",
  storageBucket: "denk-aan-jou.appspot.com",
  messagingSenderId: "24645235052",
  appId: "1:24645235052:web:37903dceeca7c85424c349"
};

//Firebase initialization
const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export default db;