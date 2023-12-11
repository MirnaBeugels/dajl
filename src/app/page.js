// Imports
import styles from './styles.module.css'
import SignIn from "./signin";

export const metadata = {
    title: 'Denk aan jou',
    description: 'Stuur een denk aan jou lichtje',
}

export default function Page() {
  return <>
  
    <section className={styles.page}>
        <h1 className={styles.title}>Denk aan jou</h1>
        <div className={styles.subtitle}>
          <p>Inloggen</p>
        </div>
        <SignIn />
    </section>

    {/* <section className={styles.logoutLink}><Link href="/registreren">Een account maken?</Link></section> */}

  </>
}
