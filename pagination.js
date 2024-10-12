document.addEventListener("DOMContentLoaded", function() {
    let thisPage = 1;
    let limit = 12;
    let productList = document.querySelectorAll('.bonus-0 .grid--4-cols .phone');
    let filterButtons = document.querySelectorAll('.filter-phone button');

    // Hàm loadPage() để phân trang sản phẩm
    function loadPage() {
        let beginGet = limit * (thisPage - 1);
        let endGet = limit * thisPage - 1;
        productList.forEach((item, key) => {
            if (key >= beginGet && key <= endGet) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        listPage();
    }

    // Hàm listPage() để tạo danh sách phân trang
    function listPage() {
        let count = Math.ceil(productList.length / limit);
        let listPageElement = document.querySelector('.listPage');
        listPageElement.innerHTML = '';

        if (thisPage != 1) {
            let prev = document.createElement('li');
            prev.innerText = 'PREV';
            prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
            listPageElement.appendChild(prev);
        }

        for (let i = 1; i <= count; i++) {
            let newPage = document.createElement('li');
            newPage.innerText = i;
            if (i == thisPage) {
                newPage.classList.add('active');
            }
            newPage.setAttribute('onclick', "changePage(" + i + ")");
            listPageElement.appendChild(newPage);
        }

        if (thisPage != count) {
            let next = document.createElement('li');
            next.innerText = 'NEXT';
            next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
            listPageElement.appendChild(next);
        }
    }

    
    window.changePage = function(page) {
        thisPage = page;
        loadPage();
        let bonusSection = document.querySelector('.bonus-0');
        if (bonusSection) {
            let scrollToPosition = bonusSection.offsetTop - 120;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
        }
    };

    
    function filterProducts(filterValue) {
        productList.forEach(item => {
            if (filterValue === 'all' || item.dataset.type === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            let filterValue = this.id.toLowerCase(); 
            filterProducts(filterValue);
        });
    });

   
    loadPage();
});