export const formatTime = (time) => {
  if(typeof time !== 'number' || time < 0) {
    return null
  } else {
    const seconds = (Math.floor(time % 60) + '').padStart(2, '0');
    const minutes = (Math.floor(time / 60) % 60 + '').padStart(2, '0');

    return [
      minutes > 9 ? minutes : '0' + minutes,
      seconds > 9 ? minutes : '0' + seconds,
    ];
  }

  
};