import Link from "next/link"
import styles from './styles.module.css'

export const metadata = {
    title: 'Denk aan jou',
    description: 'Stuur een denk aan jou lichtje',
}

export default function Page() {
  return <>
    
    <section className={styles.title}>Denk aan jou</section>
    
    <form className={styles.loginContainer}>
        <label>Je mailadres:</label>
        <input></input>
        <label>Je wachtwoord:</label>
        <input type="password" className="styles.password"></input>
        <button>Inloggen</button>
    </form>
    
    <section className={styles.bottomNav}>
      <Link href="./patient/home">Hulp nodig?</Link>
    </section>
  </>
}
