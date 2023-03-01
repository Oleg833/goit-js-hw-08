import throttle from 'lodash.throttle';
// import debounce from 'lodash.debounce';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

player.setVolume(0.5);

player.on('timeupdate', throttle(timeUpdate, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function timeUpdate({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

initialPage();

function initialPage() {
  localStorage.getItem(LOCALSTORAGE_KEY)
    ? player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
    : player.setCurrentTime(0);
}

// function timeUpdate({ seconds }) {
//   localStorage.setItem(LOCALSTORAGE_KEY, seconds);
//   console.log(`brr miliSec=`, seconds);
//   console.log(`GetStorage=`, localStorage.getItem(LOCALSTORAGE_KEY));
// }

// function setTheCurrentTime(start) {
//   player.setCurrentTime(start).then(function (seconds) {
//     console.log(`the actual time that the player seeked to = `, seconds);
//   });
// }

// function initialPage() {
//   console.log('Initial start');
//   localStorage.getItem(LOCALSTORAGE_KEY)
//     ? (setTheCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)),
//       console.log('Start 1'))
//     : (setTheCurrentTime(0), console.log('Start 0'));
// }

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', onClick);
// function onClick() {
//   setTheCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
// }

// const btn = document.querySelector('.btn');
// const btn2 = document.querySelector('.btn2');
// const divClick = document.querySelector('.divBtn2');

// const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// let timePosition = 0;
// let setTheTime = 120.457;
// let start = 0;

// const options = {
//   id: 59777392,
//   width: 640,
//   loop: true,
// };
// const player = new Player(iframe);
// const player2 = new Player('handstick', options);

// player.setVolume(0.5);

// player.on('play', function () {
//   console.log('played the video!');
//   videoTimeIs();
// });
// player.on(
//   'timeupdate',
//   throttle(function (timeupdate) {
//     console.log(`brr miliSec=`, JSON.stringify(timeupdate), timeupdate);
//   }, 1000)
// );

// btn.addEventListener('click', onClick);
// btn2.addEventListener('click', onClick2);

// function onClick() {
//   start = setTheTime;
//   setTheCurrentTime();
// }
// function onClick2() {
//   start = timePosition;
//   setTheCurrentTime();
// }

// function setTheCurrentTime() {
//   console.log('Yuaa =', start);
//   player.setCurrentTime(start).then(function (seconds) {
//     console.log(`the actual time that the player seeked to = `, seconds);
//     setTheTime = seconds;
//     console.log(`SetBtnTime=`, setTheTime);
//   });
// }

// function videoTimeIs() {
//   player.getCurrentTime().then(function (seconds) {
//     timePosition = seconds;
//     console.log('the current playback position = ', seconds);
//     console.log('Btn2 = ', timePosition);
//   });
// }

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// player.getPlayed().then(function (played) {
//   console.log(played);
// });
// player.play().then(function () {
//   console.log('the video was start played!');
// });
// player.pause().then(function () {
//   console.log('the video was paused');
// });

// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });
// player.on('play', function () {
//   console.log('played the video!');
// });
// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
