// image and caption data
const images = [
    { src: "images/image1.jpg", caption: "LAUGH" },
    { src: "images/image2.jpg", caption: "LOVE" },
    { src: "images/image3.jpg", caption: "LUNCH" },
    { src: "images/image4.jpg", caption: "HAPPINESS" },
    { src: "images/image5.jpg", caption: "FAMILY" }
];

let currentIndex = 0;
let countdown = 4; // seconds
let timer;

// DOM elements
const slideshow = document.getElementById('slideshow');
const caption = document.getElementById('caption');
const timerDisplay = document.getElementById('timer');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

// show current image
function showImage(index) {
    slideshow.src = images[index].src;
    caption.textContent = images[index].caption;
}

// move to next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetCountdown();
}

// move to previous image
function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetCountdown();
}

// countdown logic
function startCountdown() {
    timer = setInterval(() => {
        countdown--;
        timerDisplay.textContent = countdown;

        if (countdown === 0) {
            nextImage();
        }
    }, 1000);
}

// reset countdown when manually navigating
function resetCountdown() {
    clearInterval(timer);
    countdown = 4;
    timerDisplay.textContent = countdown;
    startCountdown();
}

// event listeners
nextButton.addEventListener('click', nextImage);
previousButton.addEventListener('click', previousImage);

// initialize
showImage(currentIndex);
startCountdown();
