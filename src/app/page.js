import Image from 'next/image'
import styles from './page.module.css'
import Button from './button'

var mqtt = require('mqtt')

var options = {
    host: 'f0080d86078244aea13c1f39b7076405.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'dajl2324nj',
    password: 'dnMA3A!Tw55WfGi'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

export default function Home() {
  return (
      <div className={styles.container}>
        <Button />
      </div>
  )
}
