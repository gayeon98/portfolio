// sec02 가방 상세정보 자동슬라이드 효과
const slide_list = document.querySelector('#sec01 .slide_list');
const slide_item = document.querySelectorAll('#sec01 .slide_item');
let current_idx = 0;

// 복제하기
let first_clone = slide_item[0].cloneNode(true);
let last_clone = slide_item[slide_item.length - 1].cloneNode(true);

// 앞뒤에  붙이기
slide_list.appendChild(first_clone);
slide_list.insertBefore(last_clone, slide_item[0]);

let slide_clone_item = document.querySelectorAll('#sec01 .slide_item');

// 가로배열
for (i = 0; i < slide_clone_item.length; i++) {
    slide_clone_item[i].style.left = i * 100 + '%';
}

//함수
gotoslide(1);
function gotoslide(idx) {
    slide_list.style.left = idx * -100 + '%';
    slide_list.style.transition = '3s';
    current_idx = idx;
    if (current_idx === slide_clone_item.length - 1) {
        setTimeout(function () {
            gotoslide(1);
            slide_list.style.transition = 'none';
        }, 3000);
    }
}

// 자동슬라이드함수
let a = 0;
function autoslide() {
    if (a < slide_clone_item.length - 1) {
        gotoslide(a + 1);
        a++;
    } else {
        a = 1;
        gotoslide(a);
        slide_list.style.transition = 'none';
    }
}

let auto = setInterval(autoslide, 3000);

console.log(gotoslide)


// sec05 스타일 따라하기 해당섹션으로 오면 위치이동하는 함수

const sec04 = document.querySelector('#sec04');
const item01 = document.querySelector('#sec04 .item:nth-child(1)');
const item02 = document.querySelector('#sec04 .item:nth-child(2)');
const item03 = document.querySelector('#sec04 .item:nth-child(3)');
const item04 = document.querySelector('#sec04 .item:nth-child(4)');

window.addEventListener('scroll',function(){
    let scrollLocation = document.documentElement.scrollTop;
    let sec04Top = sec04.getBoundingClientRect().top + scrollLocation;

    if(scrollLocation>sec04Top-400){
        item01.style.cssText = 'opacity:1; transition:1s; top:0; left:0; transform:translate(0,0)';
        item02.style.cssText = 'opacity:1; transition:1s; top:0; left:100%; transform:translate(-100%,0)';
        item03.style.cssText = 'opacity:1; transition:1s; top:100%; left:0; transform:translate(0,-100%)';
        item04.style.cssText = 'opacity:1; transition:1s; top:100%; left:100%; transform:translate(-100%,-100%)';
    }
});

// top버튼 색 바뀌는 효과
const sec03 = document.querySelector('#sec03');
const top_btn_text = document.querySelector('.top_btn p');
const black_btn = document.querySelector('.top_btn_black')
const white_btn = document.querySelector('.top_btn_white');
const top_btn = document.querySelector('.top_btn');
const sec02 = document.querySelector('#sec02');

window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let sec03Top = sec03.getBoundingClientRect().top + scrollLocation;
    let sec03Bot = sec03.getBoundingClientRect().bottom + scrollLocation;

    if (scrollLocation < sec03Top) {
        black_btn.style.opacity = 0;
        white_btn.style.opacity = 1;
        top_btn_text.style.color = '#fff';
    }
    if (scrollLocation > sec03Top - 900) {
        black_btn.style.opacity = 1;
        white_btn.style.opacity = 0;
        top_btn_text.style.color = '#000';
    }
    if (scrollLocation > sec03Bot - 800) {
        black_btn.style.opacity = 0;
        white_btn.style.opacity = 1;
        top_btn_text.style.color = '#fff';
    }

    // 클릭하면 부드럽게 올라가는 효과
    top_btn.addEventListener('click',function(){
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    });

    // 섹션2부터 탑버튼이 보임
    let sec02Top = sec02.getBoundingClientRect().top + scrollLocation;

    if(scrollLocation>sec02Top){
        top_btn.style.opacity = 1;
    }else{
        top_btn.style.opacity = 0;
    }


});