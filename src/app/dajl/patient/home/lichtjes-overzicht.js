// This is a client component, because it uses client side rendering
'use client'

// Import needed styles, modules and components
import styles from '../../../styles.module.css'

//Steps:
// Listen to changes in database and update info when new light signals come in

const LightsOverview = () => {

    return(
        <>

            <div className={styles.lightsOverviewContainer}>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam:</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

                <div className={styles.lightSignal}>
                    <div className={styles.lightName}>Naam</div>
                    <div className={styles.lightDate}>25 Juni 2023 | 12:25</div>
                </div>

            </div>

        </>
    )
}

export default LightsOverview;