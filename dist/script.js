setInterval(() => {
  setClock();
}, 1000);

function setClock() {
  const sh = document.querySelector('.second-hand');
  const mh = document.querySelector('.minute-hand');
  const hh = document.querySelector('.hour-hand');

  const date = new Date();

  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  sh.style.setProperty('--second-hand', `${(360 / 60) * second}deg`);
  mh.style.setProperty('--minute-hand', `${(360 / 60) * minute}deg`);
  hh.style.setProperty(
    '--hour-hand',
    `${(360 / 12) * hour + (360 / 12 / 60) * minute}deg`
  );
}

setClock();
