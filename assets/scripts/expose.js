// expose.js

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const hornData = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3'
    }
  };

  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    if (hornData[selected]) {
      hornImage.src = hornData[selected].image;
      hornAudio.src = hornData[selected].audio;
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    hornAudio.volume = volume / 100;

    let volumeLevel;
    if (volume === 0) {
      volumeLevel = 0;
    } else if (volume < 33) {
      volumeLevel = 1;
    } else if (volume < 67) {
      volumeLevel = 2;
    } else {
      volumeLevel = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeIcon.alt = `Volume level ${volumeLevel}`;
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    jsConfetti.addConfetti();
  });
}