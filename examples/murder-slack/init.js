load('api_mqtt.js');
load('api_gpio.js');
load('api_timer.js');

// Note: Change hexboardsuperhack in the URL to whatever you named your device.

let counter = 0;

Timer.set(1000, true, function() {
  MQTT.pub('iot-2/type/ESP32/id/hexboardsuperhack/evt/event/fmt/json', JSON.stringify({ message: "Spam message"}));
}, null);
