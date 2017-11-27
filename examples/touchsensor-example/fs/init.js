load('api_grove.js');
load('api_tektboard.js');

Grove.TouchSensor.attach(TektBoard.DIGITAL_GROVE_PIN, function(pin) {
  // this runs when the button is pressed
  print('Touch event at pin', pin);
  // do other cool stuff here
}, null);
