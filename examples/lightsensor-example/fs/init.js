load('api_grove.js');
load('api_tektboard.js');

// normally you'd have an average of readings or maybe hard code a
// predetermined value but I'm lazy and this still shows the main idea
// add a bit extra so it only turns on when we shine a light on it
let threshold = Grove.LightSensor.getRaw(TektBoard.ANALOG_GROVE_PIN) + 200;

Grove.LightSensor.attach(TektBoard.ANALOG_GROVE_PIN, threshold, 100 /* 10 Hz */
        function(value) {
  // this runs when the light sensor is triggered
  print('Light sensor event with value', value);
  // do other cool stuff here
}, null);
