import Link from "next/link"
import styles from './styles.module.css'

export const metadata = {
    title: 'Denk aan jou',
    description: 'Stuur een denk aan jou lichtje',
}

export default function Page() {
  return <>
    
    <section className={styles.loginContainer}>
      <email>Je mailadres</email>
      <password>Je wachtwoord</password>
      <button>Inloggen</button>
    </section>
    
    <h1>Welkom bij het denk aan jou lampje</h1>
    <Link href="./patient/home">Patient home</Link> | <Link href="./verwant/lichtje-sturen">Verwant home</Link>
    <div></div>
  </>
}
