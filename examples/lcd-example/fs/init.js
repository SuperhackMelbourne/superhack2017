// Author: Jonathon Grigg, November 2017

load('api_timer.js');
load('api_lcd.js');

let counter = 0;
let red = 0;
let green = 85;
let blue = 170;
let lcd = LCD.create(16, 2, LCD.LCD_5x8DOTS);
lcd.setRgb(red, green, blue);
lcd.print("Hello, world!");

Timer.set(100, true, function() {
  lcd.setCursor(0, 1);
  lcd.print(counter);
  counter++;
  lcd.setRgb(red, green, blue);
  red++;
  green++;
  blue++;
  red %= 255;
  green %= 255;
  blue %= 255;
}, null);

// let on = true;
// Timer.set(5000, true, function() {
//   if (on) {
//     lcd.displayOff();
//   } else {
//     lcd.displayOn();
//   }
//   on = !on;
// }, null);
