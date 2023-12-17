// The Authdetails component listens for changes in the logged in status of a user
// It also makes a record of the logged in user so we know which user is logged in
// We need this to be able to decide if a user is a verwant or a patient
// When there is no logged in user the user is redirected to the login form

// This component uses client side rendering and is a client component
'use client'

// Import the needed components, modules & styles
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./firebase";
import { useRouter } from 'next/navigation';

// The AuthDetails component
const AuthDetails = () => {

    // Constants for setting the 
    const [authUser, setAuthUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // When the login state changes
        const listen = onAuthStateChanged(auth, (user) => {
            // Check if a user is signed in, if so
            if (user) {
                // Save the logged in user's details
                setAuthUser(user);
                // And Redirect to the right page
                router.push('/dajl/verwant/lichtje-sturen');
            } else {
                // If not, save that there are no user details
                setAuthUser(null);
                // And redirect to the login page
                router.push('/');
            }
        })
    }, []);
};

export default AuthDetails;