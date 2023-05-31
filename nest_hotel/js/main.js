AOS.init();


// sec01 메인 슬라이드 페이드인효과
const slides = document.querySelectorAll('#sec01 .slide_item');
let slideIndex = 0;

showSlides();

function showSlides() {

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
        slides[i].style.transition = '1.8s';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.opacity = '1';
    slides[slideIndex - 1].style.transition = '1.8s';

    setTimeout(showSlides, 6000); // 2초마다 이미지가 체인지됩니다
}

// sec01 메인 타이머 효과
let circle = document.querySelector('#sec01 circle');

startAnimation();

function startAnimation() {
    circle.classList.add('active');
    setTimeout(stopAnimation, 5000);
}
function stopAnimation() {
    circle.classList.remove('active');
    setTimeout(startAnimation, 1000);
}


// sec01 메인 햄버거 버튼 클릭하면 카테고리메뉴 보이기
const ham_box = document.querySelector('#sec01 .ham_box');
const category_menu = document.querySelector('#sec01 .category_menu ')
const close_box = document.querySelector('#sec01 .category_menu .fa-xmark');

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


// sec03 스크롤 시 배경색 바꾸기
const sec03 = document.querySelector('#sec03');

window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec03Top = sec03.getBoundingClientRect().top + scrollLocation;
    let sec03Bot = sec03.getBoundingClientRect().bottom + scrollLocation;

    if (scrollLocation < sec03Top) {
        sec03.style.backgroundColor = '#fff';
        sec03.style.transition = '1s';
    }
    if (scrollLocation > sec03Top - 400) {
        sec03.style.backgroundColor = '#EDEAE7';
        sec03.style.transition = '0.5s';
    } if (scrollLocation > sec03Bot - 400) {
        sec03.style.backgroundColor = '#fff';
        sec03.style.transition = '0.5s';
    }
});



// sec03 객실 슬라이드 효과
const slide_list = document.querySelector('#sec03 .slide_list');
const slide_item = document.querySelectorAll('#sec03 .slide_item');
const next_btn = document.querySelector('#sec03 .next');
const prev_btn = document.querySelector('#sec03 .prev');
const slide_item_length = slide_item.length;
let current_idx = 0;//현재 보여지는 아이템
// console.log(next_btn)

// 아이템 가로배치
// for (i = 0; i < slide_item_length; i++) {
//     slide_item[i].style.left = i * 720 + 'px';
// }

// 슬라이드 함수
gotoslide(0)
function gotoslide(idx) {
    slide_list.style.left = idx * -100 + '%';
    slide_list.style.transition = '1s';
    current_idx = idx;
}

// prev 버튼 클릭
prev_btn.addEventListener('click', function () {
    if (current_idx > 0) {
        gotoslide(current_idx - 1);
    }
});

// next 버튼 클릭
next_btn.addEventListener('click', function () {
    if (current_idx < slide_item_length - 1) {
        gotoslide(current_idx + 1);
    }
});


// sec06 프로모션 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        769: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
    }
});


// sec07 멤버십 스크롤시 선 그려지는 효과
const sec07 = document.querySelector('#sec07');
const wid_line = document.querySelector('#sec07 .mem_text .wid_line');
const hei_line = document.querySelector('#sec07 .mem_text .hei_line');
console.log(wid_line)

window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec07Top = sec07.getBoundingClientRect().top + scrollLocation;
    let sec07Bot = sec07.getBoundingClientRect().bottom + scrollLocation;

    if (scrollLocation < sec07Top - 400) {
        wid_line.style.width = 0;
        wid_line.style.transition = '1.5s';
        hei_line.style.height = 0;
        hei_line.style.transition = '1.5s';
    }
    if (scrollLocation > sec07Top - 400) {
        wid_line.style.width = 100 + '%';
        wid_line.style.transition = '1.5s';
        hei_line.style.height = 100 + '%';
        hei_line.style.transition = '1.5s';
    }
    if (scrollLocation > sec07Bot - 400) {
        wid_line.style.width = 0;
        wid_line.style.transition = '1.5s';
        hei_line.style.height = 0;
        hei_line.style.transition = '1.5s';
    }
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








