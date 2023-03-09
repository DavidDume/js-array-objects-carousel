const imgArr = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const imageList = document.querySelector(".image-list");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let slider = "";

for(let i = 0; i < imgArr.length; i++) {
    let image = `<div class="img-wrapper">
                    <img class="image" src="./${imgArr[i]}" />
                </div>`;
    slider += image;          
}

imageList.innerHTML = slider

const imgWrapper = document.getElementsByClassName("img-wrapper");

let active = 0;

imgWrapper[active].classList.add('show');

next.addEventListener('click', function() {

       
    imgWrapper[active].classList.remove('show');

    if (active == imgArr.length - 1) {
        active = 0;
    } else {
        active++;
    }

    imgWrapper[active].classList.add('show');


});

prev.addEventListener('click', function() {

    imgWrapper[active].classList.remove('show');
    if(active == 0) {
        active = imgArr.length - 1;
    } else {
        active--;
    }
    imgWrapper[active].classList.add('show');


});