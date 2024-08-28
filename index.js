const slides = document.querySelectorAll(".slider");

let counter = 0;

slides.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    sliderImage();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    sliderImage();
};

const sliderImage = () => {
    slides.forEach((slider, index) => {
        slider.style.transform = `translateX(-${counter * 100}%)`;
 });
};
