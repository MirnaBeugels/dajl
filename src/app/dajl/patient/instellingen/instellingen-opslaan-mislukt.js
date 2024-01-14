// This modal shows when saving settings has failed

// Import needed styles, modules & components
import styles from '../../../styles.module.css'

const InstellingenOpslaanMislukt = ({ onClose }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (

        <section className={styles.modalContainer}>

            <div className={styles.modalInnerWrapper}>

                <div className={styles.modalHeaderWrapper}>

                    <div className={styles.modalTitle}>
                        Instellingen niet opgeslagen
                    </div>

                    <div className={styles.modalClose}>
                        <a href="#" onClick={handleCloseClick}>x</a>
                    </div>

                </div>

                <div className={styles.modalContent}>
                    <p>Je instellingen konden helaas niet opgeslagen worden. Sluit dit venster en probeer het opnieuw.</p>
                </div>

            </div>

        </section>

    )
}

export default InstellingenOpslaanMislukt;