'use client'

import styles from '../styles.module.css'
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'next/navigation';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwBV3VbioG9Hlafr8yTUo8taSDnOEMC8U",
  authDomain: "denk-aan-jou.firebaseapp.com",
  projectId: "denk-aan-jou",
  storageBucket: "denk-aan-jou.appspot.com",
  messagingSenderId: "24645235052",
  appId: "1:24645235052:web:37903dceeca7c85424c349"
};

//Firebase init
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("user was created")
            router.push('/dajl/verwant')
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <form className={styles.loginContainer} onSubmit={signUp}>
            <label>Je mailadres:</label>
            <input value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label>Je wachtwoord:</label>
            <input type="password" autoComplete="current-password" className="styles.password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" >Registreren</button>
        </form>
    );

};

export default SignUp;