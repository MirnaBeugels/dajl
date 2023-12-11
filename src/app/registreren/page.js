import SignUp from "./signup"
import styles from '../styles.module.css'
import Link from "next/link"

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
      <SignUp />
  </section>

  <section className={styles.logoutLink}><Link href="/">Al een account?</Link></section>
</>
}