'use client'

// Import needed styles, modules, and components
import styles from '../../../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Brightness = () => {
    const min = 0;
    const max = 100;

    const [brightness, setBrightness] = useState(min);

    const clamp = (min, max) => (value) => (value <= min ? min : value >= max ? max : value);
    const clampV = clamp(min, max);
    const disableMin = brightness === min;
    const disableMax = brightness === max;

    const handleBrightnessChange = (value) => {
        setBrightness(clampV(value));
    };

    return (
        <>
            <div className={styles.dropdownMenuButtonContainer}>
                <div className={styles.dropdownMenuUpDownButton}>
                    <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => handleBrightnessChange(brightness - 20)}
                        disabled={disableMin}
                    />
                </div>
                <div className={styles.dropdownMenuButtonCenter}>Helderheid: {brightness}%</div>
                <div className={styles.dropdownMenuUpDownButton}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handleBrightnessChange(brightness + 20)}
                        disabled={disableMax}
                    />
                </div>
            </div>
        </>
    );
};

export default Brightness;