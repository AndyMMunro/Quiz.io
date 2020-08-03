// Timer variables
var timerEl = document.getElementById("countdowntimer");
var timeLeft = 60;

// functions

function timer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);

        }
    }, 1000);
}

timer()

// quiz variables 
var questionDisplay = document.getElementById("question-display");
var ansBtn = Array.from(document.getElementsByClassName("ans-btn"));
var questionIndex = 0;
var score = 0;
var questionCounter = 0;
// var answerChoice = true;
var currentQuestion = {};
var availableQuestions = [];

var questionBankObj = [
    {
        "question": "what is a duck?",
        "answer1": "bird",
        "answer2": "dog",
        "answer3": "cat",
        "answer4": "fish",
        "correctAnswer": "answer1"
    },
    {
        "question": "how much is a dozen?",
        "answer1": "12",
        "answer2": "1",
        "answer3": "6",
        "answer4": "24",
        "correctAnswer": "answer1"
    },
    {
        "question": "what planet is closest to the sun?",
        "answer1": "Earth",
        "answer2": "Mercury",
        "answer3": "Saturn",
        "answer4": "Uranus",
        "correctAnswer": "answer2"
    },
    {
        "question": "what currency is the Dong from?",
        "answer1": "Thailand",
        "answer2": "Australia",
        "answer3": "Philippines",
        "answer4": "Vietnam",
        "correctAnswer": "answer4"
    },
    {
        "question": "How many great lakes are there?",
        "answer1": "1",
        "answer2": "12",
        "answer3": "4",
        "answer4": "5",
        "correctAnswer": "answer4"
    },
];

console.log(ansBtn)
// start game 
// var startBtn = document.getElementById("start-btn");
// startBtn = addEventListener("click", startGame);

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionBankObj];
    console.log(availableQuestions)
    getNewQuestion();
};

startGame();

function getNewQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionDisplay.innerText = currentQuestion.questionDisplay;
    console.log(questionDisplay);
    console.log(currentQuestion);
};

// getNewQuestion();




// function showQuestion() {
//     var questionDisplay = document.getElementById("question-display");
//     var answerDisplayOne = document.getElementById("answer1");
//     var answerDisplayTwo = document.getElementById("answer2");
//     var answerDisplayThree = document.getElementById("answer3");
//     var answerDisplayFour = document.getElementById("answer4");

//     questionDisplay.textContent = questionBankObj[questionIndex].question;
//     answerDisplayOne.textContent = questionBankObj[questionIndex].answer1;
//     answerDisplayTwo.textContent = questionBankObj[questionIndex].answer2;
//     answerDisplayThree.textContent = questionBankObj[questionIndex].answer3;
//     answerDisplayFour.textContent = questionBankObj[questionIndex].answer4;

// };

// showQuestion();
