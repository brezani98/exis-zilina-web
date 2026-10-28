const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Otvoriť navigáciu' : 'Zavrieť navigáciu');
  mainNav?.classList.toggle('is-open', !expanded);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Otvoriť navigáciu');
    mainNav.classList.remove('is-open');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const webcamImage = document.querySelector('.webcam-image');
if (webcamImage) {
  const snapshotUrl = new URL(webcamImage.dataset.snapshotUrl);
  const refreshWebcamSnapshot = () => {
    snapshotUrl.searchParams.set('refresh', String(Math.floor(Date.now() / 120000)));
    webcamImage.src = snapshotUrl.href;
  };

  refreshWebcamSnapshot();
  window.setInterval(refreshWebcamSnapshot, 120000);
}
