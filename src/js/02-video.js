import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentVideoTime = 'videoplayer-current-time';

const onPlay = function (data) {
  const videoUpdateTime = data.seconds;
  console.log(videoUpdateTime);
  console.log(data);

  localStorage.setItem(currentVideoTime, videoUpdateTime);
};

player.on('timeupdate', throttle(onPlay, 2000));
console.log(player);
console.log(onPlay);

function continueFromPausedTime() {
  const pausedTime = localStorage.getItem(currentVideoTime);

  if (pausedTime) {
    player.setCurrentTime(pausedTime);
  }
}

continueFromPausedTime();
