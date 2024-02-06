document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
});

    function toggleImageRotation() {
        var image = document.querySelector('.about-image');
        image.classList.toggle('paused');
    }
