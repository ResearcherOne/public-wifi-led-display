# public-wifi-led-display

# Architecture
![Architecture](https://raw.githubusercontent.com/ResearcherOne/public-wifi-led-display/main/architecture.png)

# Step 1 - Configure MQTT Server
- Sign up for HiveMQTT and create a free MQTT server (or just use your own).
- Create two MQTT users on your new MQTT servers. One for IoT device and one for Backend application.

# Step 2 - Build IoT Device
- You need to a LED DotMatrix (4 mini panels version) and a Nodemcu. (With a breadboard and couple of jumpers for wiring).
- Wire them together and run Hello World on Nodemcu to make sure you did wiring correct and it works.
- Update Wi-Fi and MQTT credentials in wifi-display-nodemcu.ino and upload code to the Nodemcu.

# Step 3 - Configure Lambda
- Go to AWS, create a Lambda with provided index.mjs with Node.js runtime. Make sure you update MQTT connection details accordingly.
- Create API Gateway
- Create POST Method pointing to the Lambda you created.
- Publish your API with name of "prod"

# Step 4 - Test
- API Gateway will give you URL. You can use it to test.
'''
curl --location --request POST 'https://random-string.execute-api.eu-central-1.amazonaws.com/prod' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "OMG this is so IoT"
}'
'''

# Step 5 - Done
- Celebrate!
