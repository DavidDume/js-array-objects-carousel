const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageList = document.querySelector(".image-list");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const imgs = document.getElementsByClassName("img-slider");


let slider = "";

for(let i = 0; i < images.length; i++) {
    let image = `<div class="img-wrapper">
                    <img class="image" src="./${images[i].image}" />
                    <div class="text-wrapper">
                        <h3 class="title">${images[i].title}</h3>
                        <h5 class="subtitle">${images[i].text}</h5>
                    </div>
                </div>`;
    slider += image;          
}

imageList.innerHTML = slider

const imgWrapper = document.getElementsByClassName("img-wrapper");
let active = 0;

imgWrapper[active].classList.add('show');

next.addEventListener('click', function() {

    imgs[active].classList.remove('active')
    imgWrapper[active].classList.remove('show');


    if(active == 0) {
        active = images.length - 1;
    } else {
        active--;
    }

    imgWrapper[active].classList.add('show');
    imgs[active].classList.add('active')

});

prev.addEventListener('click', function() {

    imgWrapper[active].classList.remove('show');
    imgs[active].classList.remove('active')
   
    if (active == images.length - 1) {
        active = 0;
    } else {
        active++;
    }
    imgWrapper[active].classList.add('show');
    imgs[active].classList.add('active')

});