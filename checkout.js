document.addEventListener("DOMContentLoaded", function() {
    const checkoutList = document.querySelector('.checkout-list');
    const totalQuantityElement = document.querySelector('.total-quantity');
    const totalPriceElement = document.querySelector('.total-price');
    const checkoutButton = document.querySelector('.checkout-button');
    const backButton = document.querySelector('.back-button');

    function loadCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

        let totalQuantity = 0;
        let totalPrice = 0;

        Object.values(cartItems).forEach(product => {
            totalQuantity += product.quantity;
            totalPrice += product.price * product.quantity;

            let newLi = document.createElement('li');
            newLi.innerHTML = `
                <div><img src="${product.image}" alt="${product.name}"></div>
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div>${(product.price * product.quantity).toLocaleString()}đ</div>
                    <div>SL: ${product.quantity}</div>
                </div>`;
            checkoutList.appendChild(newLi);
        });

        totalQuantityElement.innerText = totalQuantity;
        totalPriceElement.innerText = totalPrice.toLocaleString();
    }

    loadCartItems();

    checkoutButton.addEventListener('click', () => {
        alert('Tiến hành thanh toán...');
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'main.html';
    });
});