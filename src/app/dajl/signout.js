import styles from '../styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import auth from '../firebase';
import { signOut} from 'firebase/auth';
import { useRouter } from 'next/navigation';

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