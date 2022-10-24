const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframeVimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(iframeVimeoPlayer);

player.on('timeupdate', throttle(setVideoTime, 1000));

function setVideoTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
