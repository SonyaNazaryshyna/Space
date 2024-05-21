var text = "Where does space begin if it has no end?";
var speed = 80;

function typeWriter() {
    var i = 0;
    var txt = text;

    function type() {
        if (i <= txt.length) {
            document.getElementById("tsyt").innerHTML = txt.substring(0, i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter();

    var rocketLink = document.getElementById("rocket-link");

    rocketLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        animateRocket();
    });

    var exploreBtn = document.getElementById("explore-btn");

    exploreBtn.addEventListener("click", function() {
        window.location.href = "slider.html";
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

