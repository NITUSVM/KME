// const carousel = document.getElementById('carousel');
// const images = document.getElementById('carousel img');

// let counter = 0;

// setInterval(() => {
//   counter++;
//   carousel.style.transition = 'transform 0.5s ease';
//   carousel.style.transform = `translateX(-${counter * 100}%)`;
//   if (counter === images.length - 1) {

//     setTimeout(() => {
//       carousel.style.transition = 'none';
//       carousel.style.transform = 'translateX(0)';
//       counter = 0;
//     }, 500);
//   }
// }, 5000);

// const carousel = document.getElementById('carousel');
// const carouselImages = document.getElementById('carousel img');
// const imageWidth = carouselImages[0].clientWidth;
// const totalImages = carouselImages.length;

// let counter = 1;

// setInterval(() => {
//   carousel.style.transition = 'transform 0.5s ease';
//   carousel.style.transform = `translateX(-${counter * imageWidth}px)`;

//   counter++;
//   if (counter === totalImages) {
//     setTimeout(() => {
//       carousel.style.transition = 'none';
//       carousel.style.transform = `translateX(0)`;
//       counter = 1;
//     }, 500);
//   }
// }, 3000);

// const carousel = document.getElementById('carousel');
// const images = document.getElementById('carousel img');

// let slideIndex = 0;
// let intervalId = null;

// function initializeCarousel() {
//   carousel[slideIndex].classList.add("displaySlide");
// }
// function showSlide(index) {

// }
// function prevSlide() {

// }
// function nextSlide() {

// }

let counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

// function openOverlay() {
//     document.getElementById('overlay').style.display = block;
// }
// function closeOverlay() {
//     document.getElementById('overlay').style.display = none;
// }