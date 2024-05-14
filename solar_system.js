var text = "It's time for the human race to enter the solar system.";
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


document.addEventListener("DOMContentLoaded", function() {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollLeftButton = document.querySelector(".scroll-button.left");
    const scrollRightButton = document.querySelector(".scroll-button.right");

    scrollLeftButton.addEventListener("click", function() {
        scrollWrapper.scrollTo({
            left: scrollWrapper.scrollLeft - 300,
            behavior: 'smooth' // Додаємо плавне прокручування
        });
    });

    scrollRightButton.addEventListener("click", function() {
        scrollWrapper.scrollTo({
            left: scrollWrapper.scrollLeft + 300,
            behavior: 'smooth' // Додаємо плавне прокручування
        });
    });
});

const questions = [
    {
        question: "What is the largest planet in our solar system?", 
        answers: [
            {text:"Saturn", correct: false},
            {text:"Jupiter", correct: true},
            {text:"Mars", correct: false},
            {text:"Earth", correct: false}
        ]
    },
    {
        question: "Which planet in our solar system has massive rings that are easily visible with a small telescope?", 
        answers: [
            {text:"Saturn", correct: true},
            {text:"Neptune", correct: false},
            {text:"Mercury", correct: false},
            {text:"Uranus", correct: false}
        ]
    },
    {
        question: "Mars is often called “The Red Planet,” but why does it look so red to begin with?", 
        answers: [
            {text:"Mars is covered by a thick blanket of clouds that only reflect back red light", correct: false},
            {text:"The surface is incredibly hot, causing it to glow", correct: false},
            {text:"The Martial atmosphere has o lof of red dust particles", correct: false},
            {text:"The surface has a lot of iron which turns orange-red when it rusts", correct: true}
        ]
    },
    {
        question: "Did you know that there is a planet that spins on its side? Which planet is it?", 
        answers: [
            {text:"Venus", correct: false},
            {text:"Uranus", correct: true},
            {text:"Mars", correct: false},
            {text:"Jupiter", correct: false}
        ]
    },
    {
        question: "During the day this planet gets hot enough to melt lead, but at night the temperature drops to  -178°C?", 
        answers: [
            {text:"Nepture", correct: false},
            {text:"Mars", correct: false},
            {text:"Saturn", correct: false},
            {text:"Mercury", correct: true}
        ]
    },
    {
        question: "How many planets are there in our solar system?", 
        answers: [
            {text:"9", correct: false},
            {text:"7", correct: false},
            {text:"8", correct: true},
            {text:"11", correct: false}
        ]
    },
    {
        question: "To weigh roughly two-thirds less than what you do on Earth, which planet would you be on?", 
        answers: [
            {text:"Venus", correct: false},
            {text:"Jupiter", correct: false},
            {text:"Uranus", correct: false},
            {text:"Mars", correct: true}
        ]
    },
    {
        question: "How long does it take for light from the Sun to reach Earth", 
        answers: [
            {text:"Instantaneous", correct: false},
            {text:"24 hours", correct: false},
            {text:"1 minutes", correct: false},
            {text:"8 minutes", correct: true}
        ]
    },
    {
        question: "How old is the solar system", 
        answers: [
            {text:"5 billion years", correct: true},
            {text:"500 billion years", correct: false},
            {text:"5 million years", correct: false},
            {text:"5000 years", correct: false}
        ]
    },
    {
        question: "It takes the Sun 225-250 million years to do one revolution of the Milky Way Galaxy. How fast does the Sun travel?", 
        answers: [
            {text:"220km in an minute", correct: false},
            {text:"220km in a second", correct: true},
            {text:"220 km in a hour", correct: false},
            {text:"220km in a year", correct: false}
        ]
    }
];

const questionElements = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElements.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}


function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElements.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
