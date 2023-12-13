// This is a client component because it requires client side rendering
'use client'

// import needed components, modules & styles
import styles from '../styles.module.css'
import { useState } from 'react';
import auth from '../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'next/navigation';

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