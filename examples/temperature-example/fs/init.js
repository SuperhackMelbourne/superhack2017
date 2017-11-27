load('api_grove.js');
load('api_tektboard.js');
load('api_timer.js');

// print the temperature out every second for fun and profit
Timer.set(1000, true, function() {
  print(Grove.TemperatureSensor.getTemperature(TektBoard.ANALOG_GROVE_PIN));
}, null);
