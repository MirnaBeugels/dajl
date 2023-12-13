// import MQTT from node-modules
import mqtt from 'mqtt';

// HiveMQ Credentials (Not needed for Sven's setup)
var options = {
    username: 'dajl2324nj',
    password: 'dnMA3A!Tw55WfGi'
}

// initialize MQTT Client
var client = mqtt.connect(`wss://broker.hivemq.com:8884/mqtt`, options);

// Callback for a succesful connection to the broker
client.on('connect', function () {
console.log('Connected');
});

// Callback for a failed connection to the broker
client.on('error', function (error) {
console.log(error);
});

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