// The SignIn component
// This is a client component because the SignIn function uses client side rendering for updating states
'use client'

// Import needed styles, modules and components
import styles from './styles.module.css'
import { useState } from 'react';
import auth from './firebase';
import db from './firestore';
import { doc, getDoc } from 'firebase/firestore'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import InloggenMislukt from './inloggen-mislukt'

// The sign in component function
const SignIn = () => {
    
    // Needed constants
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginFailModal, setShowLoginFailModal] = useState(false);
    const router = useRouter();
    

    // The Sign in function
    const signIn = (e) => {

        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {

            console.log(userCredentials);
            const uid = auth.currentUser.uid;

            getDoc(doc(db, "users", uid)).then(docSnap => {

                if (docSnap.exists()) {

                    const userData = docSnap.data();

                        if (userData.role == "verwant") {

                            // Dit is een verwant, ga naar de pagina Lichtje Sturen
                            router.push('dajl/verwant/lichtje-sturen');

                        } else if (userData.role == "patient") {

                            // dit is een patient, ga naar de Home pagina voor de patient
                            router.push('dajl/patient/home');

                        } else {

                            console.log("Deze rol herken ik niet");

                        }

                    } else {

                    console.log("No such document!");

                } 
            })

        }).catch((error) => {
            setShowLoginFailModal(true);
            console.log(error);
        })
    };

    return (

        // The login form //
        // On typing in the password and email fields, the password and email constant are updated using client side rendering
        // On submit the signIn function is fired 
        // After signing in a user with the patient role is redirected to the ./dajl/patient/home and a user with verwant role to ./dajl/verwant/lichtje-sturen 
        <>
        <form className={styles.loginContainer} onSubmit={signIn}>
            <label>Je mailadres:</label>
            <input value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label>Je wachtwoord:</label>
            <input type="password" autoComplete="current-password" className="styles.password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" >Inloggen</button>
        </form>
        
        {/* The modals for succeeded of failed light signals, onClose the modals state is set to false so they are hidden again */}
        {showLoginFailModal && <InloggenMislukt onClose={() => setShowLoginFailModal(false)}/>}
        </>

    );

};

export default SignIn;