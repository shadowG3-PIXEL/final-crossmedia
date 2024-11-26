const video = document.querySelector('#video video');
const playButton = document.querySelector('#video .play-button');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none'; // Oculta el botón al reproducir
    }
});