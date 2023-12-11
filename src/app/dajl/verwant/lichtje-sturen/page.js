'use client'

// Imports
import styles from '../../../styles.module.css'
import { useState } from 'react'
import LichtjeSturenMislukt from './lichtje-sturen-mislukt';
import mqtt from 'mqtt';

// Export the pages
export default function LichtjeSturen() {

    // Setup the changing states
    const [sender, setSender] = useState('');
    const [showModal, setShowModal] = useState(false);

    // MQTT credentials
    var options = {
        username: 'dajl2324nj',
        password: 'dnMA3A!Tw55WfGi'
    }

    // initialize MQTT Client
    var client = mqtt.connect(`wss://broker.hivemq.com:8884/mqtt`, options);

    // setup the callbacks
    client.on('connect', function () {
      console.log('Connected');
     });

    client.on('error', function (error) {
        console.log(error);
    });
    
    // The send light signal function that is triggered when the button is clicked
    const sendLight = (s) => {
      s.preventDefault()
      if (sender) {

        // subscribe to topic 'djal/patient'
        client.subscribe('LampStatus071123djal', function() {
          console.log('subscribed');
        });
      
        // publish message 'true' to topic 'djal/patient'
        client.publish('LampStatus071123djal', 'true', function() {
            console.log('published');
        });
      

        client.on('message', function (topic, message) {
            // called each time a message is received
            console.log('Received message:', topic, message.toString());
        });

        // unsubscribe to topic 'djal/patient
        client.unsubscribe('LampStatus071123djal', function() {
            console.log('unsubscribed');
        });

      } else {
        console.log('do not send light')
        setShowModal(true);
      }
    }

    return <>
    <form className={styles.loginContainer} onSubmit={sendLight}>
    
      <h2 className={styles.title}>Stuur een lichtje</h2>
      <p>Vul je naam in en druk op de knop om een lichtje te versturen...</p> 

      <section className={styles.sendButton}></section>
          
      <label>Je naam:</label>
      <input value={sender} onChange={(s) => setSender(s.target.value)}></input>
      <button type="submit">Verstuur lichtje</button>
                
    </form>
    {showModal && <LichtjeSturenMislukt onClose={() => setShowModal(false)}/>}
    
    </>
  }