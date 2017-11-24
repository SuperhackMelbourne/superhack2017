load('api_grove.js');
load('api_timer.js');

Timer.set(1000, true, function() {
  Grove.LED.on(26);
}, null);
