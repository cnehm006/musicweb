document.addEventListener('DOMContentLoaded', function () {
    const albumCover = document.getElementById('album-cover');
    albumCover.addEventListener('click', function() {
        window.location.href = 'https://distrokid.com/hyperfollow/ch4fic/murd5scene';
    });

    // Invisible button interaction
    const invisibleButton = document.getElementById('invisibleButton');
    invisibleButton.addEventListener('click', function() {
        alert('Mira al amira, the miracle of my admiration <3');
    });

    // Example function to change song status
    function updateSongStatus() {
        const statusElement = document.getElementById('song-status');
        statusElement.style.opacity = 0;
        setTimeout(() => {
            statusElement.textContent = 'Out Now on All Platforms';
            statusElement.style.opacity = 1;
        }, 500);
    }

    // Uncomment the following line when your song is released
    // updateSongStatus();
});
