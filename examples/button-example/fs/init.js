load('api_grove.js');
load('api_tektboard.js');

let ledOn = false;

Grove.Button.attach(TektBoard.DIGITAL_GROVE_PIN, function(pin) {
  // this runs when the button is pressed
  print('Button event at pin', pin);
  // do other cool stuff here
  if (ledOn) {
    print('Turning LED off');
    Grove.LED.off(TektBoard.LED_PIN);
    ledOn = false;
  } else {
    print('Turning LED on');
    Grove.LED.on(TektBoard.LED_PIN);
    ledOn = true;
  }
}, null);
