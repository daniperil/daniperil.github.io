const audio = document.getElementById('myAudio');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Define your playlist or array of audio sources
const playlist = [
  'Acid Hues (Off the Hook)- Splatoon 2 OST.mp3',
  'ムーンライト伝説 - DALI.mp3',
  'audiofile3.mp3'
];
let currentTrackIndex = 0;

// Function to play the current track
function playTrack() {
  audio.src = playlist[currentTrackIndex];
  audio.play();
}

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  playTrack();
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  playTrack();
});

// Play the initial track
playTrack();