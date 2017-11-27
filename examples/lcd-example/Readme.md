# Introduction
This is a 2 line 16 character display with a customisable RGB backlight to make
displaying text and other information just that little bit more fun.

# Using the vibration sensor
Note that this is a 5V device, and the ESP32 runs at 3.3V. It will still work,
but we will need to power it with 5V from the 'USB' pin on the Tekt Board.
Using a Grove cable that has had the red power cable separated, connect the LCD
to the 'DIGITAL GROVE' connector on the ESP32 board and the red power cable to
the header for the 'USB' pin.

Note that this means if you're using battery power (or anything not 5V), you
won't be able to power the display.

# Further information
See the [Seeed Studio wiki page](http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/) for further information and datasheets
