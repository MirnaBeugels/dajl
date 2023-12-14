// This modal shows when logging in has failed

// Import needed styles, modules & components
import styles from './styles.module.css'

const InloggenMislukt = ({ onClose }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (

        <section className={styles.modalContainer}>

            <div className={styles.modalInnerWrapper}>

                <div className={styles.modalHeaderWrapper}>

                    <div className={styles.modalTitle}>
                        Inloggen mislukt
                    </div>

                    <div className={styles.modalClose}>
                        <a href="#" onClick={handleCloseClick}>x</a>
                    </div>

                </div>

                <div className={styles.modalContent}>
                    <p>Inloggen is niet gelukt. Sluit dit venster, controleer je email en wachtwoord en probeer het opnieuw.</p>
                </div>

            </div>

        </section>

    )
}

export default InloggenMislukt;