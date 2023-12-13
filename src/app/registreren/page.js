// The registration page
// The is a server component because it does not require client side rendering

// Import the needed components & modules
import SignUp from "./signup"
import styles from '../styles.module.css'
import Link from "next/link"

// The meta data for the name & description of the page
export const metadata = {
    title: 'Denk aan jou',
    description: 'Stuur een denk aan jou lichtje',
}

export default function Page() {
  return <>
  
  <section className={styles.page}>
      <h1 className={styles.title}>Denk aan jou</h1>
      <div className={styles.subtitle}>
        <p>Een nieuw account maken</p>
      </div>
      {/* Import the sign in form */}
      <SignUp />
  </section>

  <section className={styles.logoutLink}><Link href="/">Al een account?</Link></section>
</>
}