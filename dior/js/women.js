// sec03 제품 슬라이드 효과
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    speed: 500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// top 버튼
const top_btn = document.querySelector('.top_btn');
const sec02 = document.querySelector('#sec02');

window.addEventListener('scroll', function () {

    // top버튼 클릭하면 부드럽게 위로 올라가는 효과
    top_btn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // top버튼 섹션2부터 보이게하기
    let scrollLocation = document.documentElement.scrollTop;
    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if (scrollLocation > sec02Top - 600) {
        top_btn.style.opacity = 1;
    } else {
        top_btn.style.opacity = 0;
    }
});

