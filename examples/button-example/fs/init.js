load('api_grove.js');

Grove.Button.attach(26, function(pin) {
  print('Button event at pin', pin);
}, null);
