load('api_grove.js');
load('api_tektboard.js');

Grove.VibrationSensor.attach(TektBoard.DIGITAL_GROVE_PIN, function(pin) {
  // this runs when the vibration sensor is triggered
  print('Vibration event at pin', pin);
  // do other cool stuff here
}, null);
