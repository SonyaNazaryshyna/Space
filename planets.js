var text = "Planets are the silent sentinels, guardians of the cosmic order,<br>each bearing witness to the timeless dance of the universe";
var speed = 70;

function typeWriter() {
    var i = 0;
    var txt = text;

    function type() {
        if (i <= txt.length) {
            document.getElementById("tsplanet").innerHTML = txt.substring(0, i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

typeWriter();

document.addEventListener("DOMContentLoaded", function() {
    var rocketLink = document.getElementById("rocket-link");

    rocketLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        animateRocket();
    });
});

function animateRocket() {
    var rocketImg = document.getElementById("rocket-img");
    rocketImg.classList.add("fly-animation"); 

    rocketImg.addEventListener("animationend", function() {
        rocketImg.classList.remove("fly-animation");
        rocketImg.style.left = "-90px";
    });
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

   pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


