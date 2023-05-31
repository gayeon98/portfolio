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

// sec03 수영장 자동 슬라이드 효과
const slide_container = document.querySelector('#sec03 .slide_container');
const slide_item = document.querySelectorAll('#sec03 .slide_item');
const slide_item_length = slide_item.length;
let current_idx = 0;

let first_clone = slide_item[0].cloneNode(true);
let last_clone = slide_item[slide_item_length - 1].cloneNode(true);

slide_container.appendChild(first_clone);
slide_container.insertBefore(last_clone, slide_item[0]);

let slide_clone = slide_container.querySelectorAll('.slide_item');
let slide_clone_len = slide_clone.length;

for (i = 0; i < slide_clone_len; i++) {
    slide_clone[i].style.left = i * 100 + '%';
}

// 움직이는 슬라이드 함수
moveSlide(1);
function moveSlide(idx) {
    for (i = 0; i < slide_clone_len; i++) {
        slide_container.style.left = idx * -100 + '%';
        slide_container.style.transition = '2s';
        current_idx = idx;
    }
};

// 자동 함수
let a = 0;
function auto() {
    if (a < slide_clone_len - 1) {
        moveSlide(a + 1);
        a++;
    } else {
        a = 1;
        moveSlide(a);
        slide_container.style.transition = 'none';
    }
}

// 마우스 올렸을 때 움직이지 않는 효과
let autoSlide = setInterval(auto, 2500);
slide_container.addEventListener('mouseover', function () {
    clearInterval(autoSlide);
});
slide_container.addEventListener('mouseout', function () {
    autoSlide = setInterval(auto, 2500);
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