document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.click-here').forEach(function(button) {
        button.addEventListener('click', function() {
            
            var productDiv = this.closest('.phone');
            if (productDiv) {
                var productId = productDiv.getAttribute('data-id');
                var productName = productDiv.getAttribute('data-name');
                var productPrice = productDiv.getAttribute('data-price');

                var productImageElement = productDiv.querySelector('.phone-img');
                var productImage = productImageElement ? productImageElement.src : '';
                
                
                var url = `buynow.html?id=${productId}&name=${encodeURIComponent(productName)}&price=${productPrice}&image=${encodeURIComponent(productImage)}`;
                
                
                window.location.href = url;
            }
        });
    });
});