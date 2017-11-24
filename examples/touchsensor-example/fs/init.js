load('api_grove.js');
load('api_timer.js');

Grove.TouchSensor.attach(26, function(pin) {
  print('Touch event at pin', pin);
}, null);
