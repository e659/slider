var image = Array.from(document.querySelectorAll(".img-fluid"));
var lightBoxContainer = document.querySelector(".lightbox-container");
var lightBox = document.querySelector(".lightbox-img ");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentIndex = 0;
//display images
for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function(e) {
        currentIndex = image.indexOf(e.target);
        lightBoxContainer.style.display = "flex";
        var imagSrc = e.target.src;
        lightBox.style.backgroundImage = `url(${imagSrc})`;
    })
}
//close btn
close.addEventListener("click", hideSlider);

function hideSlider() {
    lightBoxContainer.style.display = "none";
}
//next img
next.addEventListener("click", getNextSlide);

function getNextSlide() {
    currentIndex++;
    if (currentIndex == image.length) {
        currentIndex = 0;
    }

    var imagSrc = image[currentIndex].src;
    lightBox.style.backgroundImage = `url(${imagSrc})`;
}
//prev img
prev.addEventListener("click", getPrevSlide);

function getPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = image.length - 1;
    }
    var imagSrc = image[currentIndex].src;
    lightBox.style.backgroundImage = `url(${imagSrc})`;
}
//keyboard event
document.addEventListener("keydown", function(e) {

    if (e.key == "ArrowRight") {
        getNextSlide();
    } else if (e.key == "ArrowLeft") {
        getPrevSlide();
    } else if (e.key = "Escape") {
        hideSlider();
    }
})