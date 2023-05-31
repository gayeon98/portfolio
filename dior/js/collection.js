Splitting();


//sec02 패션쇼 자동 슬라이드 효과
const slide_list = document.querySelector('#sec02 .slide_list');
const item = document.querySelectorAll('#sec02 .slide_item');
let item_len = item.length;
let current_idx = 0;  //현재 보고있는 슬라이드

// 슬라이드 복제
let first_clone = item[0].cloneNode(true);
let last_clone = item[item_len - 1].cloneNode(true);

// 슬라이드 붙이기
slide_list.appendChild(first_clone);
slide_list.insertBefore(last_clone, item[0]);

//추가된 요소를 포함한 변수 선언
let slide_clone = slide_list.querySelectorAll('#sec02 .slide_item');
let slide_clone_len = slide_clone.length;

// 아이템 가로 배열
for (i = 0; i < slide_clone_len; i++) {
    slide_clone[i].style.left = i * 100 + '%';
}

slide(1);
// 움직이는 슬라이드 함수
function slide(idx) {
    slide_list.style.left = idx * -100 + '%';
    slide_list.style.transition = '1s';
    current_idx = idx;
}

let a = 0; // 카운트 되는 함수
// 자동 슬라이드 함수
function auto() {
    if (a < slide_clone_len - 1) {
        slide(a + 1);
        a++;
    } else {
        a = 1;
        slide(a);
        slide_list.style.transition = 'none';
    }
}

setInterval(auto, 2000);


// sec04 남자 컬렉션 이미지 마우스 오버시 텍스트 바뀌는 효과
const text = document.querySelectorAll('#sec04 .text');
const img = document.querySelectorAll('#sec04 .img');

img.forEach(function (item, idx) {
    img[idx].addEventListener('mouseover', function () {
        for (i = 0; i < text.length; i++) {
            text[i].style.opacity = 0;
            text[i].style.zIndex = -1;
        }
        text[idx].style.opacity = 1;
        text[idx].style.zIndex = 1;
        text[idx].style.transition = '0.5s';
    });
});


// sec06 페이드 슬라이드
const slide_item = document.querySelectorAll('#sec06 .slide_item');

fade_slide();

function fade_slide() {
    for (i = 0; i < slide_item.length; i++) {
        slide_item[i].style.opacity = '0';
        slide_item[i].style.transition = '1s';
    }
    current_idx++;
    if (current_idx > slide_item.length) {
        current_idx = 1
    }
    slide_item[current_idx - 1].style.opacity = '1';
    slide_item[current_idx - 1].style.transition = '1s';

    setTimeout(fade_slide, 1800);
}



// sec09 마우스로 이동되고 버튼 클릭하면 움직이는 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// top버튼 클릭하면 부드럽게 올라가는 효과
const top_btn = document.querySelector('.top_btn');
const sec02 = document.querySelector('#sec02');

window.addEventListener('scroll', function () {

    top_btn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 섹션2부터 탑 버튼이 보임
    let scrollLocation = document.documentElement.scrollTop;
    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if (scrollLocation > sec02Top) {
        top_btn.style.opacity = 1;
    } else {
        top_btn.style.opacity = 0;
    }

});