/*
 * Created by Daniel Ip and Daniel Porteous with Love <3
 */

let listOfHolds = msg.payload;

const SHORT = '.';
const LONG = '-';
const THRESHOLD = 350 / 1000;
const LETTER_INTERVAL = 800 / 1000;

function isLong(push) {
  if (push[1] - push[0] < THRESHOLD)
    return SHORT;
  return LONG;
}

if (listOfHolds.length === 0)
  return [];

let currentLetter = [isLong(listOfHolds[0])];
let letters = [];
for (let i = 1; i < listOfHolds.length; i++) {
  let currentHold = isLong(listOfHolds[i]);

  // different letter
  if (listOfHolds[i][0] - listOfHolds[i - 1][1] > LETTER_INTERVAL) {
    letters.push(currentLetter.join(""));
    currentLetter = [currentHold];

    // skip remaining
    continue;
  }

  currentLetter.push(currentHold);
}

letters.push(currentLetter.join(""));

return {payload: letters};