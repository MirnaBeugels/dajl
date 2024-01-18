'use client'

import styles from '../../../styles.module.css';
import db from '../../../firestore';
import mqtt from 'mqtt';
import { useState, useEffect } from 'react';
import { doc, collection, getDoc, getDocs, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import NavPatient from '../nav';
import Pause from './pause';
import Brightness from './brightness';
import InstellingenOpslaanGelukt from './instellingen-opslaan-gelukt';
import InstellingenOpslaanMislukt from './instellingen-opslaan-mislukt';

const patient = "qggrVblFaQbcpslyTPRdU2cSBHy1";
const min = 0;

async function addDataToFirestore(pause, brightness, setShowSuccessModal, setShowFailModal) {

  try {
    
    const toSavePause = pause.pause

    if (!toSavePause) {
      // Reference the collections
      const bufferCollectionRef = collection(db, `users/${patient}/lamps/${patient}/buffer`);
      const lightsCollectionRef = collection(db, `users/${patient}/lamps/${patient}/lights`);
      // Get all documents in the buffer collection
      const querySnapshot = await getDocs(bufferCollectionRef);
      // Loop through the documents and save them to the lights collection
    querySnapshot.forEach(async (bufferDoc) => {
      const lightsDocRef = doc(lightsCollectionRef, bufferDoc.id);
      await setDoc(lightsDocRef, bufferDoc.data());
      const bufferDocRef = doc(bufferCollectionRef, bufferDoc.id);
      await deleteDoc(bufferDocRef);
    });
    } else {
      console.log("Lamp is going to be paused, not transferring lights from buffer")
    }

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
    // const client = mqtt.connect(`wss://f0080d86078244aea13c1f39b7076405.s2.eu.hivemq.cloud:8884/mqtt`, options);
    var client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

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

    // Show the modal that the light was succesfully sent
    setShowSuccessModal(true);

    return true;
  } catch (error) {
    console.error("Error writing to document", error);
    setShowFailModal(true);
    return false;
  }
}

export default function Instellingen() {

  const [showFailModal, setShowFailModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [pause, setPause] = useState(false);
  const [brightness, setBrightness] = useState(min);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch the pause value from Firestore
    async function fetchCurrentSettings() {
      try {
        const docRef = doc(db, `users/${patient}/lamps/${patient}`);
        const docSnap = await getDoc(docRef);
        console.log("docSnap:" , docSnap);

        if (docSnap.exists()) {
          // If the document exists, update the state with the pause value
          const pauseValueObject = docSnap.data().pause;
          const pauseBooleanValue = pauseValueObject.pause;
          const brightnessValueObject = docSnap.data().brightness;
          const brightnessBooleanValue = brightnessValueObject.brightness;
          setPause(pauseBooleanValue);
          setBrightness(brightnessBooleanValue);
        }
      } catch (error) {
        console.error("Error reading document", error);
      } finally {
        setLoading(false);
      }
    }

    // Call the fetchPauseValue function when the component mounts
    fetchCurrentSettings();
  }, []); // Empty dependency array ensures the effect runs once on mount

  if (loading) {
    return <p className={styles.centered}>Laden...</p>;
  }

  return (
    <>
      <h2 className={styles.title}>Instellingen</h2>

      <div className={styles.centered}>
        <Pause pause={pause} setPause={setPause} />
        <Brightness brightness={brightness} setBrightness={setBrightness} />
      </div>

      <button type="submit" onClick={() => addDataToFirestore({ pause }, { brightness }, setShowSuccessModal, setShowFailModal)}>
        Instellingen Opslaan
      </button>

      <NavPatient />

      {/* The modals for succeeded of failed light signals, onClose the modals state is set to false so they are hidden again */}
      {showFailModal && <InstellingenOpslaanMislukt onClose={() => setShowFailModal(false)}/>}
      {showSuccessModal && <InstellingenOpslaanGelukt onClose={() => setShowSuccessModal(false)}/>}

    </>
  );
}
