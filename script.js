// You can add smooth animations using JavaScript. 
// For instance, changing the text from "Coming Soon" to "Out Now" with a fade effect.

document.addEventListener('DOMContentLoaded', function () {
    // Example function to change song status
    function updateSongStatus() {
        const statusElement = document.getElementById('song-status');
        statusElement.style.opacity = 0;
        setTimeout(() => {
            statusElement.textContent = 'Out Now on All Platforms';
            statusElement.style.opacity = 1;
        }, 500); // Adjust timing as needed
    }

    // Call this function when your song is released
    // updateSongStatus();
});
