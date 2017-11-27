load('api_grove.js');
load('api_tektboard.js');
load('api_timer.js');

let buzzerOn = false;

// toggle the buzzer every second at 500Hz
// make sure to apologise to everyone nearby for what they're about to endure
Timer.set(1000, true, function() {
  if (buzzerOn) {
    print('Turning buzzer off, thank goodness');
    Grove.BuzzerPwm.off(TektBoard.DIGITAL_GROVE_PIN);
    buzzerOn = false;
  } else {
    print('Turning buzzer on, hold onto your seats');
    Grove.BuzzerPwm.on(TektBoard.DIGITAL_GROVE_PIN, 500 /* Hz */);
    buzzerOn = true;
  }
}, null);
