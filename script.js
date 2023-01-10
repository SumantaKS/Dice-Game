'use strict';
//declaring variables for each html element
const roll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const p1CrntScr = document.getElementById('current--0');
const p2CrntScr = document.getElementById('current--1');
const p1Scr = document.getElementById('score--0');
const p2Scr = document.getElementById('score--1');
const p1Active = document.querySelector('.player--0');
const p2Active = document.querySelector('.player--1');
const p1Name = document.querySelector('#name--0');
const p2Name = document.querySelector('#name--1');
//starting stats
let playerScore, activePlayer, playing;
const init = function () {
  playing = true;
  diceImg.classList.add('hide');
  p1CrntScr.textContent = '0';
  p2CrntScr.textContent = '0';
  p1Scr.textContent = '0';
  p2Scr.textContent = '0';
  p1Active.classList.add('player--active');
  p2Active.classList.remove('player--active');
  document.querySelector('.video').src = 'video.mp4';
  p1Active.classList.remove('player--winner');
  p2Active.classList.remove('player--winner');
  p1Name.classList.remove('player--winner');
  p2Name.classList.remove('player--winner');
  //player scores are stored in an array
  playerScore = [0, 0];
  activePlayer = 0; //0 is player1
};
init();
//toggling player
const toggle = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

//rolling the dice
roll.addEventListener('click', function () {
  if (playing) {
    //displaying the dice
    diceImg.classList.remove('hide');
    //generate a random number
    const rand = Math.floor(Math.random() * 6) + 1;
    //return a dice img using the random number
    diceImg.src = `dice-${rand}.png`;
    //set the current score
    document.getElementById(`current--${activePlayer}`).textContent = rand;
    //setting player score
    playerScore[`${activePlayer}`] += rand;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScore[`${activePlayer}`];
    //changing player
    if (rand == 1) {
      playerScore[`${activePlayer}`] = 0;
      document.getElementById(`score--${activePlayer}`).textContent = 0;
      toggle();
    }
  }
});
//implementing Hold btn functionality
hold.addEventListener('click', function () {
  if (playing) {
    if (playerScore[`${activePlayer}`] >= 25) {
      playing = false;
      diceImg.classList.add('hide');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .getElementById(`name--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector('.video').src = 'video1.mp4';
    } else {
      toggle();
    }
  }
});
//New game button
newGame.addEventListener('click', function () {
  init();
});
if (!playing) {
}
