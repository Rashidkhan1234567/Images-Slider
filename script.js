let images = document.getElementById("images");
let index = 0;
let arr = [
    "images/img2.webp",
    "images/img3.jpg",
    "images/img4.webp",
    "images/img5.webp",
    "images/img1.webp"
];

function next() {    
    index++;
    // let index = Math.floor(Math.random()*5);
    if (index > arr.length - 1) {
        index = 0;
    }
    images.src = arr[index];
    
}

function prev() {
    index--;
    // let index = Math.floor(Math.random()*5);
    if (index < 0) {
        index = arr.length - 1;
    }
    images.src = arr[index];
    
}


setInterval(next, 10000);
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const span = document.querySelector("span");
const body = document.querySelector('body');
const button = document.querySelector('#changeColorButton');

button.addEventListener('click', () => {
	if (body.style.backgroundColor === 'white') {
		body.style.backgroundColor = 'black';
		body.style.color = 'white';
		button.style.backgroundColor = 'white';
		button.style.color = 'black';
        prevButton.style.boxShadow = "7px 7px 10px gray"
        nextButton.style.boxShadow = "7px 7px 10px gray"
        span.style.boxShadow = "0px 0px 30px #c2c2c2"
	} else {
		body.style.backgroundColor = 'white';
		body.style.color = 'black';
		button.style.backgroundColor = '#0009';
		button.style.color = 'white';
        prevButton.style.boxShadow = "0px 7px 20px #000"
        nextButton.style.boxShadow = "0px 7px 20px #000"
        span.style.boxShadow = "0px 0px 60px #000"
	}
});