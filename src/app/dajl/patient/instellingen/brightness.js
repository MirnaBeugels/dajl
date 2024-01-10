'use client'

// Import needed styles, modules, and components
import styles from '../../../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export default function Brightness({ brightness, setBrightness }) {


    const min = 0;
    const max = 255;

    // // const [brightness, setBrightness] = useState(min);

    const clamp = (min, max) => (value) => (value <= min ? min : value >= max ? max : value);
    const clampV = clamp(min, max);
    const disableMin = brightness === min;
    const disableMax = brightness === max;

    const handleBrightnessChange = (value) => {
        setBrightness(clampV(value));
    };

    function showBrightness() {
        if (brightness == 0) {
            return <span>0</span>
        } else if (brightness == 51) {
            return <span>20</span>
        }else if (brightness == 102) {
            return <span>40</span>
        } else if (brightness == 153) {
            return <span>60</span>
        } else if (brightness == 204) {
            return <span>80</span>
        } else if (brightness == 255) {
            return <span>100</span>
        } else {
            return <span>Onjuiste waarde</span>
        }
    }

    return (
        <>

            <div className={styles.dropdownMenuButtonContainer}>
                <div className={styles.dropdownMenuUpDownButton}>
                    <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => handleBrightnessChange(brightness - 51)}
                        disabled={disableMin}
                    />
                </div>
                <div className={styles.dropdownMenuButtonCenter}>Helderheid: {showBrightness()}%</div>
                <div className={styles.dropdownMenuUpDownButton}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handleBrightnessChange(brightness + 51)}
                        disabled={disableMax}
                    />
                </div>
            </div>
        </>
    );
};