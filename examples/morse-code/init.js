load('api_mqtt.js');
load('api_gpio.js');
load('api_timer.js');

let DOT_MAX = 500;


let button_one = 32;
let button_two = 33;

let start = Timer.now();
let last = Timer.now();

let times = [];

let first = true;


GPIO.set_button_handler(button_one, GPIO.PULL_DOWN, GPIO.INT_EDGE_ANY, 100, function() {
  if (!first) {
    times[times.length] = [last, Timer.now() - start];
  }
  first = !first;
  last = Timer.now() - start;
}, null);


/* For some reason this gets triggered on its own sometimes. */
GPIO.set_button_handler(button_two, GPIO.PULL_DOWN, GPIO.INT_EDGE_POS, 500, function() {
  print('Sending message!');
  MQTT.pub('iot-2/type/ESP32/id/hexboardsuperhack/evt/event/fmt/json', JSON.stringify({ message: times}));
  times = [];
}, null);
