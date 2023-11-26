function changeAudio() {
    var audio = document.getElementById('myAudio');
    var source = document.getElementById('audioSource');

    // Check the current source and switch to the other audio file
    if (source.src === 'Acid Hues (Off the Hook)- Splatoon 2 OST.mp3') {
        source.src = 'ムーンライト伝説 - DALI.mp3'; // Change to the second audio file
    } else {
        source.src = 'Acid Hues (Off the Hook)- Splatoon 2 OST.mp3'; // Change back to the first audio file
    }

    // Reload the audio to apply the new source
    audio.load();
}