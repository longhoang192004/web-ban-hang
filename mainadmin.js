//Go to top
$(document).ready(function() {
    window.onscroll = function() {
      var scrollToTopButton = $("#go-to-top");
      if ($(window).scrollTop() > 20) {
        scrollToTopButton.fadeIn();
      } else {
        scrollToTopButton.fadeOut();
      }
    };

    $("#go-to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  });

// change img
function changeImg(id){
    let imgPath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imgPath);
}

//cart
function cong(id) {
  var value = document.getElementById(`text_so_luong-${id}`).value
  document.getElementById(`text_so_luong-${id}`).value = parseInt(value) + 1;
}
function tru(id) {
  var value = document.getElementById(`text_so_luong-${id}`).value
  if(parseInt(value) > 1)
  {
      document.getElementById(`text_so_luong-${id}`).value = parseInt(value) - 1;
  }
  
}

function xoa(id) {
  $(`.cart-body-row-${id}`).fadeOut();
}

const trungne = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Account Management
const tabs = $$('.item-manager')
const panes = $$('.item-detail')
console.log(tabs)
tabs.forEach(function(tab, index) {
  const pane = panes[index]
  tab.onclick = function() {
      trungne('.item-manager.active').classList.remove('active')
      trungne('.item-detail.active').classList.remove('active')
      this.classList.add('active')
      pane.classList.add('active')
  }
})

$(document).ready(function(){
  $(window).resize(function() {
      if($(window).width() < 739) {
          $('.collapse').removeClass('show');
      }
      else
      {
          $('.collapse').addClass('show');
      }
  });
  // click mega menu
  $('.header_nav-list .header_nav-list-item a').click(function() {
      $('.header_nav-list-item a').removeClass('active');
      $(this).addClass('active');
  });
  $('.ng-has-child1 > a i').click(function(e){
      e.preventDefault();
      $('.ul-has-child1').toggle('slow');
      $('.cong').toggleClass('hidden');
      $('.tru').toggleClass('hidden');
  })
 
  $('.ng-has-child2 > a i').click(function(e){
      e.preventDefault();
  })
  $('#trigger-mobile').click(function(e){
      $('.mobile-main-menu').toggleClass('xyz');
      $('.overlay').toggleClass('hidden');
  })
  $('.overlay').click(function(e){
      $('.mobile-main-menu').toggleClass('xyz');
      $('.overlay').toggleClass('hidden');
  })
  // click thông tin đơn hàng trang pay
  $('.summary').click(function(){
      $('.summary-content').toggle('slow');
  })
})
function hienthi(id, name){
  $(`#${name}`).toggle('slow');
  $(`.cong${id}`).toggleClass('hidden');
  $(`.tru${id}`).toggleClass('hidden');
}

//Admin
// Lấy các phần tử cần thiết
const numPages = document.querySelectorAll('.num-page');
const previousButton = document.querySelector('.previousPage');
const nextButton = document.querySelector('.nextPage');

// Lặp qua từng nút num-page và thêm sự kiện click
numPages.forEach(function(pageButton) {
  pageButton.addEventListener('click', function() {
    // Xóa lớp active từ tất cả các nút num-page
    numPages.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Thêm lớp active cho nút vừa được nhấn
    this.classList.add('active');

    // Lấy giá trị của thuộc tính page-data của nút vừa được nhấn
    const pageNumber = this.getAttribute('page-data');

    // Ẩn tất cả các div có class là "page"
    document.querySelectorAll('.page').forEach(function(page) {
      page.style.display = 'none';
    });

    // Hiển thị div có id là "page" + pageNumber
    document.getElementById('page' + pageNumber).style.display = 'block'; // Sửa display thành 'table-row-group' để giữ bảng cấu trúc
  });
});

// Sự kiện cho nút Previous
previousButton.addEventListener('click', function() {
  const activeButton = document.querySelector('.num-page.active');
  const previousPage = activeButton.previousElementSibling;
  if (previousPage && previousPage.classList.contains('num-page')) {
    previousPage.click();
  }
});

// Sự kiện cho nút Next
nextButton.addEventListener('click', function() {
  const activeButton = document.querySelector('.num-page.active');
  const nextPage = activeButton.nextElementSibling;
  if (nextPage && nextPage.classList.contains('num-page')) {
    nextPage.click();
  }
});

//Order
const order_numPages = document.querySelectorAll('.order-num-page');
const order_previousButton = document.querySelector('.order-previousPage');
const order_nextButton = document.querySelector('.order-nextPage');

order_numPages.forEach(function(pageButton) {
  pageButton.addEventListener('click', function() {
    order_numPages.forEach(function(btn) {
      btn.classList.remove('active');
    });

    this.classList.add('active');

    const order_pageNumber = this.getAttribute('page-data');

    document.querySelectorAll('.order-page').forEach(function(page) {
      page.style.display = 'none';
    });

    document.getElementById('order-page' + order_pageNumber).style.display = 'block'; // Sửa display thành 'table-row-group' để giữ bảng cấu trúc
  });
});

order_previousButton.addEventListener('click', function() {
  const order_activeButton = document.querySelector('.order-num-page.active');
  const order_previousPage = order_activeButton.previousElementSibling;
  if (order_previousPage && order_previousPage.classList.contains('order-num-page')) {
    order_previousPage.click();
  }
});

order_nextButton.addEventListener('click', function() {
  const order_activeButton = document.querySelector('.order-num-page.active');
  const order_nextPage = order_activeButton.nextElementSibling;
  if (order_nextPage && order_nextPage.classList.contains('order-num-page')) {
    order_nextPage.click();
  }
});

//User
const user_numPages = document.querySelectorAll('.user-num-page');
const user_previousButton = document.querySelector('.user-previousPage');
const user_nextButton = document.querySelector('.user-nextPage');

user_numPages.forEach(function(pageButton) {
  pageButton.addEventListener('click', function() {
    user_numPages.forEach(function(btn) {
      btn.classList.remove('active');
    });

    this.classList.add('active');

    const user_pageNumber = this.getAttribute('page-data');

    document.querySelectorAll('.user-page').forEach(function(page) {
      page.style.display = 'none';
    });

    document.getElementById('user-page' +user_pageNumber).style.display = 'block'; // Sửa display thành 'table-row-group' để giữ bảng cấu trúc
  });
});

user_previousButton.addEventListener('click', function() {
  const user_activeButton = document.querySelector('.user-num-page.active');
  const user_previousPage = user_activeButton.previousElementSibling;
  if (user_previousPage && user_previousPage.classList.contains('user-num-page')) {
    user_previousPage.click();
  }
});

user_nextButton.addEventListener('click', function() {
  const user_activeButton = document.querySelector('.user-num-page.active');
  const user_nextPage = user_activeButton.nextElementSibling;
  if (user_nextPage && user_nextPage.classList.contains('user-num-page')) {
    user_nextPage.click();
  }
});