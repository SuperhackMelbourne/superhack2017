# Morse Code
This code is a morse code sender.

## How it works
1. You input your morse code using Button 1 on the board.
2. You send the code using Button 2 on the board.
3. Node.RED receives the message and passes it to `timeToMorseCode.js`.
4. `timeToMorseCode.js` converts the timings that the board sent into dots and dashes and passes them to `toWord.js`.
5. `toWord.js` converts the dots and dashes into a word.
6. The word gets sent to Slack.

## How to set it up
Put `init.js` on your board and set up the MQTT stuff for your particular Bluemix setup. The other js files then go into Node.RED. You can see the configuration in the included screenshot.

## Notes
- You can only send one word at a time as it stands currently, though it wouldn't be much extra work to modify the code to support this.
- It might've just been the board we were using, but sometimes Button 2 would randomly push itself, sending your message before you finished inputting it. Just a heads up 😄.
- The timings in `timeToMorseCode.js` might need some tweaking to your liking.

## Authors
[Daniel Ip](https://github.com/ip4368) and [Daniel Porteous](https://github.com/banool).
