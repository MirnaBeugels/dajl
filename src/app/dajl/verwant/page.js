'use client'

import styles from '../../styles.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Link from 'next/link';

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

console.log(auth.currentUser);

export default function Page() {

    const router = useRouter();
  
    if (auth.currentUser != null) {
      return <>
            <h1 className={styles.title}>Denk aan jou</h1>
            <div className={styles.subtitle}>
              <p>Home Verwant</p>
            </div>
            <Link className={styles.verwantNav} href="/dajl/verwant/lamp-koppelen">Lampje koppelen</Link>
            <Link className={styles.verwantNav} href="/dajl/verwant/lichtje-sturen">Lichtje sturen</Link>
      </>
    } else { 
      useEffect(() => {
      router.push('/');
    }, []);
    }
  }