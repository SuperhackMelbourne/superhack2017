load('api_dotstar.js');
load('api_timer.js');

let index = 0;
let numPixels = 6, colorOrder = DotStar.BGR;
let strip = DotStar.create(numPixels, colorOrder);
strip.clear();
strip.show();

Timer.set(1000, true, function(pin) {
  print('index', index);
  strip.clear();
  strip.setPixel(index, 64, 0, 64);
  strip.show();
  index++;
  index %= 6;
}, null);
