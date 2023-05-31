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


// sec05 자주하는 질문 아코디언 효과
const title = document.querySelectorAll('#sec05 .title');

title.forEach(function(item,idx){
    title[idx].addEventListener('click',function(){

        let disText = this.nextElementSibling;
        
        if(disText.style.maxHeight){
            disText.style.maxHeight = null;
        }else{
            disText.style.maxHeight = disText.scrollHeight + 'px';
        }
    });
});

// top 버튼 부드럽게 올라가는 효과
const top_btn = document.querySelector('.top_btn');

top_btn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior : 'smooth'
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