

let submitBtn = document.getElementById('loginbtn');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    // let isLoggedIn = localStorage.getItem('isLoggedIn');
    // if (isLoggedIn) {
    //     alert('You are already logged in!');
    //     return; // При наявності авторизації вийти з функції та не відправляти форму
    // }

    // Отримуємо значення полів форми
    const firstname = document.getElementById('firstname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('dateOfBirth').value;
    const location = document.getElementById('location').value;

    // Викликаємо функцію validateForm() та перевіряємо, чи дані є валідними
    let isValid = validateForm(); 
    // let isValid = true;
    if (isValid) {



        // Формуємо об'єкт даних для відправки на сервер
        var data = {
            firstname: firstname,
            email: email,
            phone: phone,
            dateOfBirth: date,
            location: location,

            
        };

    
        // Відправляємо дані на сервер
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/submit-form'); 
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {

                localStorage.setItem('isLoggedIn', true);
                alert('Form submitted successfully!');
                // Очищаємо поля форми після відправки
                document.getElementById('firstname').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('dateOfBirth').value = "";
                document.getElementById('location').value = "";
            }
        };
    
        xhr.send(JSON.stringify(data));
    }
});

function validateForm() {
    const firstname = document.getElementById('firstname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('dateOfBirth').value;
    const location = document.getElementById('location').value;
   

    const firstnamePattern = /^[A-Za-z\s]+$/;
 
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/; // Припустимо, що номер телефону складається з 10 цифр
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Припустимо, що дата представлена в форматі YYYY-MM-DD
    const locationPattern = /^[A-Za-z\s]+$/; // Припустимо, що локація містить тільки літери та пробіли
    

    let isValid = true; 

//     if (!firstnamePattern.test(firstname)) {
//         document.getElementById('error-message1').textContent = "Please enter a valid firstname and surname (only letters and spaces).";
//         isValid = false; 
//     } else {
//         document.getElementById('error-message1').textContent = ""; 
//     }

 

//     if (!emailPattern.test(email)) {
//         document.getElementById('error-message2').textContent = "Please enter a valid email.";
//         isValid = false; 
//     } else {
//         document.getElementById('error-message2').textContent = ""; 
//     }

//     if (!phonePattern.test(phone)) {
//         document.getElementById('error-message3').textContent = "Please enter a valid phone number.";
//         isValid = false; 
//     } else {document.getElementById('error-message3').textContent = ""; 
// }
// if (!datePattern.test(date)) {document.getElementById('error-message4').textContent = "Please enter a valid date of birth. Must be in the format YYYY-MM-DD."; 
// isValid = false; 
// } else {
// document.getElementById('error-message4').textContent = ""; 
// }

// if (!locationPattern.test(location)) {document.getElementById('error-message5').textContent = "Please enter a valid location (only letters and spaces).";
// isValid = false; 
// } else {
// document.getElementById('error-message5').textContent = ""; 
// }
//     return isValid; 
// }

// if (!firstnamePattern.test(firstname)) {
//     document.getElementById('error-message1').textContent = "Please enter a valid firstname and surname (only letters and spaces).";
//     isValid = false; 
// } else {
//     document.getElementById('error-message1').textContent = ""; 
// }

// if (!emailPattern.test(email)) {
//     document.getElementById('error-message2').textContent = "Please enter a valid email.";
//     isValid = false; 
// } else {
//     document.getElementById('error-message2').textContent = ""; 
// }

// if (!phonePattern.test(phone)) {
//     document.getElementById('error-message3').textContent = "Please enter a valid phone number.";
//     isValid = false; 
// } else {
//     document.getElementById('error-message3').textContent = ""; 
// }

// if (!datePattern.test(date)) {
//     document.getElementById('error-message4').textContent = "Please enter a valid date of birth. Must be in the format YYYY-MM-DD."; 
//     isValid = false; 
// } else {
//     document.getElementById('error-message4').textContent = ""; 
// }

// if (!locationPattern.test(location)) {
//     document.getElementById('error-message5').textContent = "Please enter a valid location (only letters and spaces).";
//     isValid = false; 
// } else {
//     document.getElementById('error-message5').textContent = ""; 
// }

// return isValid;

if (!firstnamePattern.test(firstname)) {
    alert("Please enter a valid firstname and surname (only letters and spaces).");
    isValid = false; 
} 

if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    isValid = false; 
}

if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    isValid = false; 
}

if (!datePattern.test(date)) {
    alert("Please enter a valid date of birth. Must be in the format YYYY-MM-DD.");
    isValid = false; 
}

if (!locationPattern.test(location)) {
    alert("Please enter a valid location (only letters and spaces).");
    isValid = false; 
}

return isValid;

}




var text = "Space is for everybody, it's everybody's business to know about space."


var speed = 70;

function typeWriter() {
    var i = 0;
    var txt = text;

    function type() {
        if (i <= txt.length) {
            document.getElementById("tsrock").innerHTML = txt.substring(0, i);
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





var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();