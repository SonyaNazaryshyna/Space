var text = "Did you know that you can find the Big Dipper, Orion and Cassiopeia in the night sky? <br >Constellations are not just stars, they are whole stories told in the language of space!";
var speed = 70;

function typeWriter() {
    var i = 0;
    var txt = text;

    function type() {
        if (i <= txt.length) {
            document.getElementById("tsconstellations").innerHTML = txt.substring(0, i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

typeWriter();


document.addEventListener("DOMContentLoaded", function() {
    var rocketLink = document.getElementById("constellations-link");

    rocketLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        animateRocket();
    });
});

function animateRocket() {
    var rocketImg = document.getElementById("constellations-img");
    rocketImg.classList.add("fly-animation"); 

    rocketImg.addEventListener("animationend", function() {
        rocketImg.classList.remove("fly-animation");
        rocketImg.style.left = "-90px";
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slide.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', showNextSlide);
    document.querySelector('.prev').addEventListener('click', showPrevSlide);
});




document.getElementById("info-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const targetElement = document.querySelector("#hidden-text");
    smoothScroll(targetElement);
});

document.getElementById("constellation-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const targetElement = document.querySelector(".particle-container");
    smoothScroll(targetElement);
});

function smoothScroll(target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}
