// top버튼을 누르면 부드럽게 올라감
const top_btn = document.querySelector('.top_btn');
const sec02 = document.querySelector('#sec02');

window.addEventListener('scroll', function () {

    top_btn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 섹션2부터 버튼이 보임
    let scrollLocation = document.documentElement.scrollTop;
    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if (scrollLocation > sec02Top) {
        top_btn.style.opacity = 1;
    } else {
        top_btn.style.opacity = 0;
    }

});

