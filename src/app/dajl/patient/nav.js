'use client'

// Import needed styles, modules and components
import styles from '../../styles.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavPatient = () => {

    var path = "";
    var page = "";
    const pathname = usePathname();

    if (pathname == "/dajl/patient/instellingen") {
      path = "/dajl/patient/home";
      page = "Home";
    } else if (pathname == "/dajl/patient/home") {
      path = "/dajl/patient/instellingen";
      page = "Instellingen";
    };

    return(
        <>
        <div className={styles.navPatient}><Link href={path}>{page}</Link></div>
        </>
    )
};

export default NavPatient;