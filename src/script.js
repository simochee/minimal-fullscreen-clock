document.addEventListener('DOMContentLoaded', _ => {
  document.body.addEventListener('click', _ => {
    if (!document.fullscreenElement) {
      document.body.mozRequestFullScreen();
    }
  });
  
  requestAnimationFrame(clock);
});

function clock() {
  const $clock = document.getElementById('clock');

  const d = new Date();

  const h = '' + d.getHours();
  const m = '' + d.getMinutes();
  const s = '' + d.getSeconds();

  $clock.innerText = `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;

  requestAnimationFrame(clock);
}
