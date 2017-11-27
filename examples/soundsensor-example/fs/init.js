load('api_grove.js');
load('api_tektboard.js');

// normally you'd have an average of readings or maybe hard code a
// predetermined value but I'm lazy and this still shows the main idea
// add a bit extra so it only turns on for noticable sounds
// note that these sensors are a bit troublesome to work with as far as finding
// a threshold that suits your use case
let threshold = Grove.SoundSensor.getRaw(TektBoard.ANALOG_GROVE_PIN) + 100;

Grove.SoundSensor.attach(TektBoard.ANALOG_GROVE_PIN, threshold, 100 /* 10 Hz */
        function(avgValue) {
  // this runs when the sound sensor is triggered
  print('Sound sensor event with avgValue', avgValue);
  // do other cool stuff here
}, null);
