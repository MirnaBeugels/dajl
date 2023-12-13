// The homepage containing the login form
// This is a server component

// Import the needed components, modules & styles
import styles from './styles.module.css'
import SignIn from "./signin";

// Meta data (can only be used in server components!)
export const metadata = {
    title: 'Denk aan jou',
    description: 'Stuur een denk aan jou lichtje',
}

// The home page (login)
export default function Page() {
  return <>
  
    <section className={styles.page}>
        <h1 className={styles.title}>Denk aan jou</h1>
        <div className={styles.subtitle}>
          <p>Inloggen</p>
        </div>

        {/* Import the component containing the login form */}
        <SignIn />

    </section>

    {/* The link to registration has not been implemented in the user flow, uncomment it to use it */}
    {/* <section className={styles.logoutLink}><Link href="/registreren">Een account maken?</Link></section> */}

  </>
}