# IBM Bluemix

1. Start with the IBM Cloud essentials course: https://developer.ibm.com/courses/all/bluemix-essentials/ . In Lab 1, at the "Set up a new Bluemix account" step, select the US South Region (https://console.ng.bluemix.net/).

Code:

```
load('api_mqtt.js'); load('api_gpio.js');
let pin = 32, topic = 'iot-2/type/ESP32/id/hex-board/cmd/update/fmt/json';
GPIO.set_button_handler(pin, GPIO.PULL_UP, GPIO.INT_EDGE_POS, 200, function() {
MQTT.pub('iot-2/type/ESP32/id/hex-board/evt/event/fmt/json', JSON.stringify({ message: "I need help!"}));
}, null);
MQTT.sub('iot-2/type/ESP32/id/hex-board/cmd/update/fmt/json', function(conn, topic, msg) { print('Topic:', topic, 'message:', msg);
}, null);
```
