var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000)

var fut=new Date("jan 1,2025 00:00:00").getTime()
setInterval(function(){
    var noW =new Date().getTime()
    var D=fut-noW
    var days = Math.floor(D/(1000*60*60*24))
    var hours = Math.floor(D/(1000*60*60))
    var minutes = Math.floor(D/(1000*60))
    var seconds = Math.floor(D/(1000))

    hours%=24
    minutes%=60
    seconds%=60

    document.getElementById("days").innerText=days
    document.getElementById("hours").innerText=hours
    document.getElementById("minutes").innerText=minutes
    document.getElementById("seconds").innerText=seconds

},1000)


document.addEventListener("DOMContentLoaded", function() {
    const phoneItems_1 = document.querySelectorAll('.grid--3-cols-fix-1 .phone');
    const itemsPerPage_1 = 6;
    let currentPage_1 = 1;

    function showPage_1(page_1) {
        const startIndex_1 = (page_1 - 1) * itemsPerPage_1;
        const endIndex_1 = startIndex_1 + itemsPerPage_1;

        phoneItems_1.forEach(function(item_1, index_1) {
            if (index_1 >= startIndex_1 && index_1 < endIndex_1) {
                item_1.style.display = 'block';
            } else {
                item_1.style.display = 'none';
            }
        });
    }

    function goToNextPage_1() {
        currentPage_1++;
        if (currentPage_1 > Math.ceil(phoneItems_1.length / itemsPerPage_1)) {
            currentPage_1 = 1;
        }
        showPage_1(currentPage_1);
    }

    document.getElementById('nextPageButton-1').addEventListener('click', goToNextPage_1);

    showPage_1(currentPage_1);
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".grid--3-cols-fix-2 .i");
    const firstCardWidth = carousel.querySelector(".phone").offsetWidth;
    let stepWidthRight = firstCardWidth + 53;
    let stepWidthLeft = firstCardWidth + 49;
    let isFirstRightClick = true;

    let totalCards = carousel.children.length;

    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.id === "right") {
                if (isFirstRightClick) {
                    carousel.scrollLeft += stepWidthRight + 20;
                    isFirstRightClick = false;
                } else {
                    carousel.scrollLeft += stepWidthRight;
                }
            } else if (btn.id === "left") {
                if (carousel.scrollLeft < stepWidthLeft + firstCardWidth * 1) {
                    carousel.scrollLeft -= firstCardWidth * 1 + 75;
                } 
                else if(carousel.scrollLeft < stepWidthLeft + firstCardWidth *2){
                    carousel.scrollLeft-=firstCardWidth * 1 + 65
                }
                else {
                    carousel.scrollLeft -= stepWidthLeft;
                }
                isFirstRightClick = true;
            }
        });
    });

    let isDragging = false,
        startX,
        startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const deltaX = e.pageX - startX;
        carousel.scrollLeft = startScrollLeft - deltaX;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel1");
    const arrowBtns = document.querySelectorAll(".grid--3-cols-fix-3 .i");
    const firstCardWidth = carousel.querySelector(".phone").offsetWidth;
    let stepWidthRight = firstCardWidth + 53;
    let stepWidthLeft = firstCardWidth + 49;
    let isFirstRightClick = true;

    let totalCards = carousel.children.length;

    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.id === "right1") {
                if (isFirstRightClick) {
                    carousel.scrollLeft += stepWidthRight + 20;
                    isFirstRightClick = false;
                } else {
                    carousel.scrollLeft += stepWidthRight;
                }
            } else if (btn.id === "left1") {
                if (carousel.scrollLeft < stepWidthLeft + firstCardWidth * 1) {
                    carousel.scrollLeft -= firstCardWidth * 1 + 75;
                } 
                else if(carousel.scrollLeft < stepWidthLeft + firstCardWidth *2){
                    carousel.scrollLeft-=firstCardWidth * 1 + 65
                }
                else {
                    carousel.scrollLeft -= stepWidthLeft;
                }
                isFirstRightClick = true;
            }
        });
    });

    let isDragging = false,
        startX,
        startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const deltaX = e.pageX - startX;
        carousel.scrollLeft = startScrollLeft - deltaX;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
});


let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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