document.querySelectorAll('input[name="slider"]').forEach(input => {
    input.addEventListener('click', function(event) {
        if (lastChecked === this) {
            var linkElement = this.nextElementSibling.querySelector('.card-link');
            window.location.href = linkElement.getAttribute('data-url');
        } else {
            lastChecked = this;
        }
    });
    input.addEventListener('change', function(event) {
        if (this.checked) {
            lastChecked = this;
        }
    });
});

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
