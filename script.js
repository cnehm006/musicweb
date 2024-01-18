document.addEventListener('DOMContentLoaded', function () {
    const albumCover = document.getElementById('album-cover');
    albumCover.addEventListener('click', function() {
        window.location.href = 'https://distrokid.com/hyperfollow/ch4fic/murd5scene';
    });

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
