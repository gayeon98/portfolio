AOS.init();

// sec01 메인 햄버거 버튼 클릭하면 카테고리메뉴 보이기
const ham_box = document.querySelector('.ham_box');
const category_menu = document.querySelector('.category_menu ')
const close_box = document.querySelector('.category_menu .fa-xmark');

ham_box.addEventListener('click', function () {
    category_menu.style.visibility = 'visible';
    category_menu.style.opacity = '1';
    category_menu.style.transition = '0.5s';
});

close_box.addEventListener('click', function () {
    category_menu.style.visibility = 'hidden';
    category_menu.style.opacity = '0';
    category_menu.style.transition = '0.5s';
});


// sec05 쿤스트 라운지 마우스오버시 텍스트 바뀌고 opacity 바뀌는 효과 
const overlay = document.querySelectorAll('#sec05 .overlay');
const text = document.querySelectorAll('#sec05 .text_box .text');

overlay.forEach(function (item, idx) {
    text[0].style.opacity=1;
    overlay[0].style.opacity = 0;
    overlay[idx].addEventListener('mouseover', function () {
        for (i = 0; i < overlay.length; i++) {
            overlay[i].style.opacity = 1;
            overlay[i].style.transition = '0.5s';
            text[i].style.opacity = 0;
        }
        overlay[idx].style.opacity = 0;
        overlay[idx].style.transition = '0.5s';
        text[idx].style.opacity = 1;
    });
});


// sec08 다이닝 프로모션 페이드 슬라이드
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,     
    speed:1500,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  
// top 버튼 부드럽게 올라가는 효과
const top_btn = document.querySelector('.top_btn');

top_btn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// top 버튼 젤 위에서는 안보이게 하기
const sec02 = document.querySelector('#sec02');
window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if (scrollLocation > sec02Top - 600) {
        top_btn.style.opacity = 1;
        top_btn.style.visibility = 'visible';
        top_btn.style.transition = '0.5s';
    }
    if (scrollLocation < sec02Top - 600) {
        top_btn.style.opacity = 0;
        top_btn.style.visibility = 'hidden';
        top_btn.style.transition = '0.5s';
    }

});