load('api_grove.js');
load('api_tektboard.js');
load('api_timer.js');

let ledOn = false;

// toggle the LED every second
Timer.set(1000, true, function() {
  if (ledOn) {
    print('Turning LED off');
    Grove.LED.off(TektBoard.DIGITAL_GROVE_PIN);
    ledOn = false;
  } else {
    print('Turning LED on');
    Grove.LED.on(TektBoard.DIGITAL_GROVE_PIN);
    ledOn = true;
  }
}, null);
