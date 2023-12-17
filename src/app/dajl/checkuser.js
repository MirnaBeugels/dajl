// The Authdetails component listens for changes in the logged in status of a user
// It also makes a record of the logged in user so we know what type of user is logged in
// And if they are on a page that they are allowed to view/use

// This component uses client side rendering and is a client component
'use client'

// Import the needed components, modules & styles
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase";
import { useRouter, usePathname } from 'next/navigation';
import db from '../firestore';
import { doc, getDoc } from 'firebase/firestore'

// The AuthDetails component
const CheckUser = () => {

    // Constants for setting the 
    const [authUser, setAuthUser] = useState(null);
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        // When the login state changes
        const listen = onAuthStateChanged(auth, (user) => {
            // Check if a user is signed in, if a user is signed in
            if (user) {
                // Save the logged in user's userdetails
                setAuthUser(user);
                // Get the current user's uid
                const uid = auth.currentUser.uid;
                // Create a snapshot of the user with this user id
                getDoc(doc(db, "users", uid)).then(docSnap => {
                    // If this user exists in the database
                    if (docSnap.exists()) {
                        // Save their userdata in a variable
                        const userData = docSnap.data();
                            // Check the user role
                            // If this logged in user is a verwant & is on a verwant page. Do nothing
                            if (userData.role == "verwant" && pathname.includes("verwant")) {
                            // If this logged user is a verwant and not on a verwant page. Send to lichtje sturen page.
                            } else if ((userData.role == "verwant" && !pathname.includes("verwant"))) {
                                router.push('/dajl/verwant/lichtje-sturen');
                            // If this logged in user is a patient & is on a patient page. Do nothing.
                            } else if (userData.role == "patient" && pathname.includes("patient")) {
                            // If this logged in user is a patient & not on a patient page. Send to patient home page.
                            } else if (userData.role == "patient" && !pathname.includes("patient")) {
                                router.push('/dajl/patient/home');
                            } else {
                                console.log("Deze rol herken ik niet");
                            }
                        } else {
                        console.log("No such document!");
                    } 
                })
            } else {
                // If there is no signed in user set that there is no userdetails
                setAuthUser(null);
                // And redirect the visitor to the login page
                router.push('/');
            }
        })
    }, []);
};

export default CheckUser;