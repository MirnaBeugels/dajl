import styles from '../../../styles.module.css';
import LightsOverview from './lichtjes-overzicht';
import NavPatient from '../nav';

export const metadata = {
  title: 'Denk aan jou | Home',
  description: 'Stuur een denk aan jou lichtje',
};

export default function Patient() {
  return (
    <>
      <h2 className={styles.title}>Ontvangen Lichtjes</h2>
      <LightsOverview />
      <NavPatient />
    </>
  );
}
