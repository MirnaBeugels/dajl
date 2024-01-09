'use client'

import styles from '../../../styles.module.css';
import db from '../../../firestore';
import mqtt from 'mqtt';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import NavPatient from '../nav';
import Pause from './pause';
import Brightness from './brightness';

const patient = "qggrVblFaQbcpslyTPRdU2cSBHy1";
const min = 0;

async function addDataToFirestore(pause, brightness) {
  try {
    const docRef = doc(db, `users/${patient}/lamps/${patient}`);

    await updateDoc(docRef, {
      brightness: brightness,
      pause: pause,
    });

    console.log("Data saved");

    // MQTT credentials
    const options = {
      username: 'dajl2324nj',
      password: 'dnMA3A!Tw55WfGi',
    };

    // Initialize MQTT Client
    const client = mqtt.connect(`wss://f0080d86078244aea13c1f39b7076405.s2.eu.hivemq.cloud:8884/mqtt`, options);

    // Connect to the MQTT broker and set up callbacks for success & failure in connecting
    client.on('connect', function () {
      console.log('Connected to MQTT broker through Node-Red');
    });

    client.on('error', function (error) {
      console.log(error);
    });

    // MQTT cannot receive objects, turn the value into a string before sending it
    const pauseToString = JSON.stringify(pause.pause);
    // Send the pause value to the pause topic @ MQTT
    client.publish('In/Lights/Location/qggrVblFaQbcpslyTPRdU2cSBHy1/Pause', pauseToString, function () {
      console.log('Pause state was sent');
    });

    // MQTT cannot receive objects, turn the value into a string before sending it
    const brightnessToString = JSON.stringify(brightness.brightness);
    // Send the brightness value to the level topic at MQTT
    client.publish('In/Lights/Location/qggrVblFaQbcpslyTPRdU2cSBHy1/Level', brightnessToString, function () {
      console.log('Brightness state was sent');
    });

    return true;
  } catch (error) {
    console.error("Error writing to document", error);
    return false;
  }
}

export default function Instellingen() {
  const [pause, setPause] = useState(false);
  const [brightness, setBrightness] = useState(min);

  return (
    <>
      <h2 className={styles.title}>Instellingen</h2>

      <div className={styles.centered}>
        <Pause pause={pause} setPause={setPause} />
        <Brightness brightness={brightness} setBrightness={setBrightness} />
      </div>

      <button type="submit" onClick={() => addDataToFirestore({ pause }, { brightness })}>
        Instellingen Opslaan
      </button>

      <NavPatient />
    </>
  );
}
