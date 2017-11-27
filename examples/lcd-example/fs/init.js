load('api_timer.js');
load('api_lcd.js');

let counter = 0;
let red = 0, green = 85, blue = 170;  // evenly spaced mix of colours
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
  // we only have 8 bit (-> 256 possible value) colour
  red %= 256;
  green %= 256;
  blue %= 256;
}, null);

// displayOn/Off doesn't toggle the backlight, only the text
// let on = true;
// Timer.set(5000, true, function() {
//   if (on) {
//     lcd.displayOff();
//   } else {
//     lcd.displayOn();
//   }
//   on = !on;
// }, null);
