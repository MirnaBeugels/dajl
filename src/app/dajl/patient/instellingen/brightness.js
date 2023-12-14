'use client'

// Import needed styles, modules and components
import styles from '../../../styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Brightness = () => {

    const [brightness, setBrightness] = useState(false);

    const incrementBrightness = () => {

    }

    return( <>

        <div className={styles.dropdownMenuButtonContainer}>
            <div className={styles.dropdownMenuUpDownButton}><FontAwesomeIcon icon={faMinus} onClick={incrementBrightness} /></div>
            <div className={styles.dropdownMenuButtonCenter}>Helderheid: 100%</div>
            <div className={styles.dropdownMenuUpDownButton}><FontAwesomeIcon icon={faPlus} onClick={incrementBrightness} /></div>
        </div>
        
        </>
    )
};

export default Brightness;