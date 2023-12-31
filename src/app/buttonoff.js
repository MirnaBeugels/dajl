'use client'

import styles from './page.module.css'
import mqtt from 'mqtt'

export default function Buttonoff() {

    // var mqtt = require('mqtt')

    var options = {
        username: 'dajl2324nj',
        password: 'dnMA3A!Tw55WfGi'
    }

    // initialize the MQTT client
    // var client = mqtt.connect(`wss://f0080d86078244aea13c1f39b7076405.s2.eu.hivemq.cloud:8884/mqtt`, options);
    var client = mqtt.connect(`wss://broker.hivemq.com:8884/mqtt`, options);

    // setup the callbacks
    client.on('connect', function () {
        console.log('Connected');
    });

    client.on('error', function (error) {
        console.log(error);
    });

    function sendMessageOff() {

        // subscribe to topic 'djal/patient'
        client.subscribe('LampStatus071123djal', function() {
            console.log('subscribed');
        });
        
        // publish message 'Hello' to topic 'djal/patient'
        client.publish('LampStatus071123djal', 'false', function() {
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
        };

    return (
        <button className={styles.button} onClick={sendMessageOff}>Lampje uit</button>
    )
};