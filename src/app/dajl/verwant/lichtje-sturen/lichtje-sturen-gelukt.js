// This modal shows when sending a light signal has succeeded

// Import needed styles, modules & components
import styles from '../../../styles.module.css'

const LichtjeSturenGelukt = ({ onClose }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (

        <section className={styles.modalContainer}>

            <div className={styles.modalInnerWrapper}>

                <div className={styles.modalHeaderWrapper}>

                    <div className={styles.modalTitle}>
                        Versturen geslaagd
                    </div>

                    <div className={styles.modalClose}>
                        <a href="#" onClick={handleCloseClick}>x</a>
                    </div>

                </div>

                <div className={styles.modalContent}>
                    <p>Het versturen van je lichtje is geslaagd!</p>
                </div>

            </div>

        </section>

    )
}

export default LichtjeSturenGelukt;