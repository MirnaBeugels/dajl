'use client'

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./firebase";
import { useRouter } from 'next/navigation';
import styles from '../styles.module.css'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                router.push('/dajl/verwant/lichtje-sturen');
                console.log(user);
            } else {
                setAuthUser(null);
                router.push('/');
                console.log(user);
            }
        })
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('user was signed out')
        }).catch(error => console.log(error))
    }

    return (
        <>
            {authUser ? <div className={styles.logoutLink} onClick={userSignOut}>Uitloggen?</div> : <>&nbsp;</>}
        </>
    );
};

export default AuthDetails;