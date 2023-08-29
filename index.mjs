import * as mqtt from "mqtt";

export const handler = async (event) => {
  console.log("PRINTIN EVENT")
  console.log(event)
    
  const mqttClient = mqtt.connect('mqtt://abcd.s2.eu.hivemq.cloud', {
    username: 'backend-mqtt-user',
    password: 'backend-mqtt-password',
    port: 8883,
    protocol: 'mqtts'
  });


  return new Promise((resolve, reject) => {
    mqttClient.on('connect', () => {
      mqttClient.publish('set_led_display', event.message, (err) => {
        if (err) {
          reject(err);
        } else {
          const response = {
            statusCode: 200,
            body: JSON.stringify('Message sent to MQTT broker!'),
          };
          resolve(response);
        }
        mqttClient.end(); // Close the connection
      });
    });

    mqttClient.on('error', (err) => {
      reject(err);
    });
  });
};
