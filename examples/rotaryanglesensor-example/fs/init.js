load('api_grove.js');
load('api_tektboard.js');
load('api_timer.js');

// print the angle out every second for fun and profit
Timer.set(1000, true, function() {
  print(Grove.RotaryAngleSensor.getAngle(TektBoard.ANALOG_GROVE_PIN));
}, null);
