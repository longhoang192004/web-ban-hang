document.addEventListener("DOMContentLoaded", function() {
    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let listCard = document.querySelector('.listCard');
    let body = document.querySelector('body');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    openShopping.addEventListener('click', () => {
        body.classList.add('active');
    });

    closeShopping.addEventListener('click', () => {
        body.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        body.classList.remove('active');
    });

    let listCards = {};

    document.querySelectorAll('.phone-icon-hidden-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            let item = event.target.closest('.phone');
            let id = item.getAttribute('data-id');
            let name = item.getAttribute('data-name');
            let price = parseInt(item.getAttribute('data-price'));
            let image = item.querySelector('img').src;

            addToCard(id, name, price, image);
        });
    });

    function addToCard(id, name, price, image) {
        if (!listCards[id]) {
            listCards[id] = { id, name, price, image, quantity: 0 };
        }
        listCards[id].quantity++;
        reloadCard();
    }

    function reloadCard() {
        listCard.innerHTML = '';
        let totalPrice = 0;
        let totalQuantity = 0;

        Object.values(listCards).forEach(product => {
            if (product.quantity > 0) {
                totalPrice += product.price * product.quantity;
                totalQuantity += product.quantity;

                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="${product.image}"/></div>
                    <div>${product.name}</div>
                    <div>${(product.price * product.quantity).toLocaleString()}</div>
                    <div>
                        <button class="decrementButton" data-product-id="${product.id}">-</button>
                        <div class="count">${product.quantity}</div>
                        <button class="incrementButton" data-product-id="${product.id}">+</button>
                    </div>`;
                listCard.appendChild(newDiv);

                newDiv.querySelector('.incrementButton').addEventListener('click', () => {
                    changeQuantity(product.id, product.quantity + 1);
                });

                newDiv.querySelector('.decrementButton').addEventListener('click', () => {
                    changeQuantity(product.id, product.quantity - 1);
                });
            }
        });

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = totalQuantity;
    }

    function changeQuantity(id, newQuantity) {
        if (newQuantity <= 0) {
            delete listCards[id];
        } else {
            listCards[id].quantity = newQuantity;
        }
        reloadCard();
    }

    // Thêm sự kiện click cho thẻ total
    total.addEventListener('click', () => {
        goToCheckout();
    });

    // Hàm chuyển hướng tới trang thanh toán và lưu thông tin giỏ hàng vào localStorage
    function goToCheckout() {
        localStorage.setItem('cartItems', JSON.stringify(listCards));
        window.location.href = 'checkout.html';
    }
});

