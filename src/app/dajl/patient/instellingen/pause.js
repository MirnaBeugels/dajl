'use client'

// Import needed styles, modules and components
import styles from '../../../styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Pause({ pause, setPause }) {

    console.log(pause);

    // const [pause, setPause] = useState(false);

    return( <>

        <div className={styles.dropdownMenuButtonContainer} onClick={() => { pause ? (setPause(false)) : (setPause(true)) }}>
            <div className={styles.dropdownMenuButton}>{ pause ? (<>Pauze: aan</>) : (<>Pause: uit</>) }</div>
            <div className={ pause ? (styles.dropdownMenuSaveButtonOff) : (styles.dropdownMenuSaveButtonOn) }><FontAwesomeIcon icon={ pause ? faToggleOn : faToggleOff } className={styles.closeicon} /></div>
        </div>

        </>
    )
};