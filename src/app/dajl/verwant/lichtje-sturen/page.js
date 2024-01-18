// This is a client component, because it uses client side rendering
'use client'

// Import needed styles, components & modules
import styles from '../../../styles.module.css'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import LichtjeSturenMislukt from './lichtje-sturen-mislukt';
import LichtjeSturenGelukt from './lichtje-sturen-gelukt';
import db from '../../../firestore';
import mqtt from 'mqtt';
import { collection, addDoc } from 'firebase/firestore';

const patient = "qggrVblFaQbcpslyTPRdU2cSBHy1";
var date = "";

console.log(date);

// const querySnapshot = await getDocs(collection(db, "users", patient, "lamps", patient, "lights"));

async function addDataToFirestore (sender, date, pause) {
  try {
    if (pause) {
      const docRef = await addDoc(collection(db, `users/${patient}/lamps/${patient}/buffer`), {
        name: sender,
        date: date,
        seen: false,
      });
      console.log("document was written with ID: ", docRef.id);
    } else {
      console.log("pause is:" ,pause)
      const docRef = await addDoc(collection(db, `users/${patient}/lamps/${patient}/lights`), {
        name: sender,
        date: date,
        seen: false,
      });
      console.log("document was written with ID: ", docRef.id);
    }
    
    return true
  } catch (error) {
    console.error("Error adding document", error)
    return false
  }
}

// Export the page
export default function LichtjeSturen() {

    // Setup the changing states for the modal and checking if a name was filled in
    const [sender, setSender] = useState('');
    const [pause, setPause] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showFailModal, setShowFailModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
            console.log(pauseBooleanValue);
            setPause(pauseBooleanValue);
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

    // MQTT credentials
    var options = {
        username: 'dajl2324nj',
        password: 'dnMA3A!Tw55WfGi'
    }

    // initialize MQTT Client
    // var client = mqtt.connect(`wss://f0080d86078244aea13c1f39b7076405.s2.eu.hivemq.cloud:8884/mqtt`, options);
    var client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

    // Connect to the MQTT broker and setup callbacks for sucess & failure in connecting
    client.on('connect', function () {
        console.log('Connected to MQTT broker through Node-Red');
     });

    client.on('error', function (error) {
          console.log(error);
    });
    
    // The send light signal function, this function is fired when the button is clicked
    const sendLight = async (e) => {

        date = new Date();

        e.preventDefault()
      
        // Check if the user filled in the name field, if so...
        if (sender) {

            // Publish message 'true' to Node Red topic to send light signal to the lamp
            client.publish('In/Lights/Location/qggrVblFaQbcpslyTPRdU2cSBHy1/Switch', 'true', function() {
                console.log('light was sent');
            });

            const added = await addDataToFirestore(sender, date, pause)

            if (added) {
              setSender("");
              console.log("Data was added to Firestore")
            };

            // Show the modal that the light was succesfully sent
            setShowSuccessModal(true);

        // If the user did not fill in a name, do not send the light
        } else {
            console.log('do not send light')
            setShowFailModal(true);
        }
      }

      return <>
      {/* The form te send a signal, on submit fire the senLight function */}
      <form className={styles.loginContainer} onSubmit={sendLight}>
      
          <h2 className={styles.title}>Stuur een lichtje</h2>
          <p>Vul je naam in en druk op de knop om een lichtje te versturen...</p> 

          <section className={styles.sendButton}></section>
              
          <label>Je naam:</label>
          <input value={sender} onChange={(s) => setSender(s.target.value)}></input>
          <button type="submit">Verstuur lichtje</button>
                
    </form>

    {/* The modals for succeeded of failed light signals, onClose the modals state is set to false so they are hidden again */}
    {showFailModal && <LichtjeSturenMislukt onClose={() => setShowFailModal(false)}/>}
    {showSuccessModal && <LichtjeSturenGelukt onClose={() => setShowSuccessModal(false)}/>}
    
    </>
  }