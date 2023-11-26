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

// After your content is loaded (e.g., window.onload or after API calls)
window.onload = function() {
    // Simulating a delay for demonstration purposes
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';
        // Show the main content
        document.getElementById('main-content').style.display = 'block';
    }, 2000); // Adjust the delay time as needed
};