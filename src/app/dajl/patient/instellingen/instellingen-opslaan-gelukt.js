// This modal shows when saving lamp settings has succeeded

// Import needed styles, modules & components
import styles from '../../../styles.module.css'

const InstellingenOpslaanGelukt = ({ onClose }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (

        <section className={styles.modalContainer}>

            <div className={styles.modalInnerWrapper}>

                <div className={styles.modalHeaderWrapper}>

                    <div className={styles.modalTitle}>
                        Instellingen opgeslagen
                    </div>

                    <div className={styles.modalClose}>
                        <a href="#" onClick={handleCloseClick}>x</a>
                    </div>

                </div>

                <div className={styles.modalContent}>
                    <p>Je instellingen zijn opgeslagen!</p>
                </div>

            </div>

        </section>

    )
}

export default InstellingenOpslaanGelukt;