document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = document.querySelectorAll('.phone-icon-hidden-cart');
    const notification = document.getElementById('notification');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);

           
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.classList.add('hidden');
                }, 500);
            }, 1000 + 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = document.querySelectorAll('.phone-icon-hidden-heart');
    const notification1 = document.getElementById('notification1');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            notification1.classList.remove('hidden');
            setTimeout(() => {
                notification1.classList.add('show');
            }, 400);

           
            setTimeout(() => {
                notification1.classList.remove('show');
                setTimeout(() => {
                    notification1.classList.add('hidden');
                }, 400);
            }, 1000 + 400);
        });
    });
});