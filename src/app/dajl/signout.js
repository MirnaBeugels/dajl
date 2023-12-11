
import styles from '../styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { initializeApp } from "firebase/app";
import { getAuth, signOut} from 'firebase/auth';
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

const SignOut = () => {

    const router = useRouter();
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("User has signed out!");
            router.push('/');
          }).catch((error) => {
            console.log(error);
        });
    }; 

    return (
        <section className={styles.logoutLink}>
            <nav className={styles.logout}>
                <div onClick={userSignOut}>Uitloggen</div>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.icon} />
            </nav>
        </section>
    )

}

export default SignOut;