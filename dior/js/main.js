AOS.init();
Splitting();


// sec03 베스트 아아템 슬라이드 시작

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.7,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// sec09 news 텍스트 마우스 오버시 이미지 바뀌는 효과
const news_text = document.querySelectorAll('#sec09 .textbox');
const news_img = document.querySelectorAll('#sec09 .slide_item');
console.log(news_img)

news_text.forEach(function (item, idx) {
    news_text[idx].addEventListener('mouseover', function () {
        for (i = 0; i < news_img.length; i++) {
            news_img[i].style.opacity = 0;
            news_img[i].style.zIndex = -1;
        }
        news_img[idx].style.opacity = 1;
        news_img[idx].style.zIndex = 1;
        news_img[idx].style.transition = '1s';
    });

    news_text[idx].addEventListener('mouseout', function () {
        if (idx != 0) {
            news_img[0].style.opacity = 1;
            news_img[idx].style.opacity = 0;
            news_img[idx].style.zIndex = -1;
            news_img[idx].style.transition = '1s';
        }
    });
});

// top버튼 색 바뀌는 효과
const sec08 = document.querySelector('#sec08');
const top_btn_text = document.querySelector('.top_btn p');
const black_btn = document.querySelector('.top_btn_black')
const white_btn = document.querySelector('.top_btn_white');
const top_btn = document.querySelector('.top_btn');
const sec02 = document.querySelector('#sec02');

window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec08Top = sec08.getBoundingClientRect().top + scrollLocation;
    let sec08Bot = sec08.getBoundingClientRect().bottom + scrollLocation;

    if (scrollLocation < sec08Top) {
        black_btn.style.opacity = 0;
        white_btn.style.opacity = 1;
        top_btn_text.style.color = '#fff';
    }
    if (scrollLocation > sec08Top - 900) {
        black_btn.style.opacity = 1;
        white_btn.style.opacity = 0;
        top_btn_text.style.color = '#000';
    }
    if (scrollLocation > sec08Bot - 800) {
        black_btn.style.opacity = 0;
        white_btn.style.opacity = 1;
        top_btn_text.style.color = '#fff';
    }


    // top버튼 클릭하면 부드럽게 위로 올라가는 효과
    top_btn.addEventListener('click',function(){
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    });

    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if(scrollLocation>sec02Top){
        top_btn.style.opacity = 1;
    }else{
        top_btn.style.opacity = 0;
    }


});







































