const finger = document.querySelector('#finger');
const hand = document.querySelector('#hand');
const key = document.querySelector('#key');
const repeat = document.querySelector('#repeat');
const start = document.querySelector('#start');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const hands = ["right", "left"];

const keys = ["A", "B", "C", "D", "E", "F", "G"];

start.addEventListener('click', () => {
    let finger_rand = getRandomInt(1, 6);
    let hand_rand = hands[getRandomInt(0, 2)];
    let key_rand = keys[getRandomInt(0, 7)];
    let repeat_rand = getRandomInt(1, 6);
    finger.textContent = `Finger: ${finger_rand}`;
    hand.textContent = `Hand: ${hand_rand}`;
    key.textContent = `Key: ${key_rand}`;
    repeat.textContent = `Times: ${repeat_rand}`;
});

