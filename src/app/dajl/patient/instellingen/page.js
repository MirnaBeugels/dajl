import styles from '../../../styles.module.css'
import NavPatient from '../nav'
import Pause from './pause'
import Brightness from './brightness'

export default function Instellingen() {


      return <>

      <h2 className={styles.title}>Instellingen</h2>

            <div className={styles.centered}>
                  <Pause />
                  <Brightness />
            </div>

      <button type="submit" >Instellingen Opslaan</button>
            
      <NavPatient />

      </>
  }