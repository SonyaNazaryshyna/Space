//Карусель
const images = document.querySelectorAll('.carousel-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        if (image.classList.contains('clicked')) {
            image.classList.remove('clicked');
            image.style.transform = 'scale(1)';
        } else {
            image.classList.add('clicked');
            image.style.transform = 'scale(1.3)'; 
        }
    });
//Миготіння напису GALLERY
    document.addEventListener('DOMContentLoaded', function() {
        const galleryText = document.querySelector('.gallery-text');
    
        function createParticles() {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            galleryText.appendChild(particle);
    
            const size = Math.random() * 10 + 5; 
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
    
            const animationDuration = Math.random() * 3 + 1; 
            particle.style.animationDuration = `${animationDuration}s`;
    
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
    
            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        }
    
        setInterval(createParticles, 800); 
    });
    
    
    image.addEventListener('mouseenter', () => {
        if (!image.classList.contains('clicked')) {
            image.style.transform = 'scale(1.1)'; 
        }
    });

    image.addEventListener('mouseleave', () => {
        if (!image.classList.contains('clicked')) {
            image.style.transform = 'scale(1)'; 
        }
    });
});

document.addEventListener('click', (event) => {
    images.forEach(image => {
        if (image.classList.contains('clicked') && !image.contains(event.target)) {
            image.classList.remove('clicked');
            image.style.transform = 'scale(1)';
        }
    });
});


//Фото з блоку More photos
document.addEventListener('DOMContentLoaded', function() {
    const pinterestImages = document.querySelectorAll('.pinterest-grid img');
    let zIndexCounter = 1;

    pinterestImages.forEach(image => {
        image.addEventListener('click', () => {
            const scaleFactor = 1.2; 
            const currentScale = parseFloat(image.style.transform.split('(')[1]); 

            if (!currentScale || currentScale < scaleFactor) {
                zIndexCounter++; 
                image.style.transform = `scale(${scaleFactor})`;
                image.style.zIndex = zIndexCounter; 
            } else {
                image.style.transform = ''; 
                image.style.zIndex = 'auto'; 
            }
        });
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