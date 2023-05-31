AOS.init();

// header 해당 섹션으로 부드럽게 이동하기
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const sec01 = document.querySelector('#sec01');
const sec03 = document.querySelector('#sec03');
const sec04 = document.querySelector('#sec04');

home.addEventListener('click', function () {
    window.scrollBy({
        top: sec01.getBoundingClientRect().top,
        behavior: 'smooth'
    })
});
about.addEventListener('click', function () {
    window.scrollBy({
        top: sec02.getBoundingClientRect().top,
        behavior: 'smooth'
    })
});
portfolio.addEventListener('click', function () {
    window.scrollBy({
        top: sec03.getBoundingClientRect().top,
        behavior: 'smooth'
    })
});
contact.addEventListener('click', function () {
    window.scrollBy({
        top: sec04.getBoundingClientRect().top,
        behavior: 'smooth'
    })
});

// header 색상변경
const header = document.querySelector('header')
window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec03Top = sec03.getBoundingClientRect().top + scrollLocation;
    let sec03Bot = sec03.getBoundingClientRect().bottom + scrollLocation;
    // 0이상이면 그림자생기기
    if (scrollLocation > 0) {
        header.classList.add('bg_change');
    } else {
        header.classList.remove('bg_change');
    }
});

// sec02 skills 효과
const sec02 = document.querySelector('#sec02');
const html = document.querySelector('#sec02 .html .line .active')
const css = document.querySelector('#sec02 .css .line .active')
const js = document.querySelector('#sec02 .js .line .active')
const ps = document.querySelector('#sec02 .ps .line .active')
const ai = document.querySelector('#sec02 .ai .line .active')
const xd = document.querySelector('#sec02 .xd .line .active')
console.log(css)
window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if (scrollLocation > sec02Top - 400) {
        html.classList.add('html_active');
        css.classList.add('css_active');
        js.classList.add('js_active');
        ps.classList.add('ps_active');
        ai.classList.add('ai_active');
        xd.classList.add('xd_active');
    }
    else {
        html.classList.remove('html_active');
        css.classList.remove('css_active');
        js.classList.remove('js_active');
        ps.classList.remove('ps_active');
        ai.classList.remove('ai_active');
        xd.classList.remove('xd_active');
    }
});

// sec03 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});