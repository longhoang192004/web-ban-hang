document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const mainNav = document.querySelector('.main-nav');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !sidebar.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});