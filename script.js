
//Timer variables 

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


var questionBankObj = [
    {
        "question": "what is a duck?",
        "answer1": "duck",
        "answer2": "cat",
        "answer3": "cat",
        "answer4": "cat",
    },
    {
        "question": "how much is a dozen?",
        "answer1": "12",
        "answer2": "1",
        "answer3": "6",
        "answer4": "24",
    },
    {
        "question": "what planet is closest to the sun?",
        "answer1": "Earth",
        "answer2": "Mercury",
        "answer3": "Saturn",
        "answer4": "Uranus",
    },
    {
        "question": "what currency is the Dong from?",
        "answer1": "Thailand",
        "answer2": "Australia",
        "answer3": "Philippines",
        "answer4": "Vietnam",
    },
    {
        "question": "How many great lakes are there?",
        "answer1": "1",
        "answer2": "12",
        "answer3": "4",
        "answer4": "5",
    },
];

var questionIndex = 0;

function showQuestion() {
    var questionDisplay = document.getElementById("question-block")
    var answerDisplayOne = document.getElementById("answer1")
    var answerDisplayTwo = document.getElementById("answer2")
    var answerDisplayThree = document.getElementById("answer3")
    var answerDisplayFour = document.getElementById("answer4")

    questionDisplay.textContent = questionBankObj[questionIndex].question;
    answerDisplayOne.textContent = questionBankObj[questionIndex].answer1;
    answerDisplayTwo.textContent = questionBankObj[questionIndex].answer2;
    answerDisplayThree.textContent = questionBankObj[questionIndex].answer3;
    answerDisplayFour.textContent = questionBankObj[questionIndex].answer4;

}

showQuestion();