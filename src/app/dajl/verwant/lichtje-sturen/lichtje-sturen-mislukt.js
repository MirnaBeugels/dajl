
import styles from '../../../styles.module.css'

const LichtjeSturenMislukt = ({ onClose }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (

        <section className={styles.modalContainer}>

            <div className={styles.modalInnerWrapper}>

                <div className={styles.modalHeaderWrapper}>

                    <div className={styles.modalTitle}>
                        Versturen mislukt
                    </div>

                    <div className={styles.modalClose}>
                        <a href="#" onClick={handleCloseClick}>x</a>
                    </div>

                </div>

                <div className={styles.modalContent}>
                    <p>Je lichtje kon helaas niet verzonden worden omdat je je naam niet ingevuld hebt. Sluit dit venster, vul je naam in en probeer het opnieuw.</p>
                </div>

            </div>

        </section>

    )
}

export default LichtjeSturenMislukt;