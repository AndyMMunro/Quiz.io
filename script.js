window.onload = function () {


    // var hideElements = document.getElementById("question-container").style.display = "none";

    // Timer variables
    var timerEl = document.getElementById("countdowntimer");
    var timeLeft = 5;


    // quiz variables 
    var questionDisplay = document.getElementById("question-display");
    var ansBtn = Array.from(document.getElementsByClassName("ans-btn"));
    var questionIndex = 0;
    var score = 0;
    var questionCounter = 0;
    var acceptingAnswers = true;
    var currentQuestion = {};
    var availableQuestions = [];

    var questionBank = [
        {
            "question": "what is a duck?",
            "answer0": "bird",
            "answer1": "dog",
            "answer2": "cat",
            "answer3": "fish",
            "correctAnswer": "bird"
        },
        {
            "question": "how much is a dozen?",
            "answer0": "12",
            "answer1": "1",
            "answer2": "6",
            "answer3": "24",
            "correctAnswer": "answer1"
        },
        {
            "question": "what planet is closest to the sun?",
            "answer0": "Earth",
            "answer1": "Mercury",
            "answer2": "Saturn",
            "answer3": "Uranus",
            "correctAnswer": "answer2"
        },
        {
            "question": "what currency is the Dong from?",
            "answer0": "Thailand",
            "answer1": "Australia",
            "answer2": "Philippines",
            "answer3": "Vietnam",
            "correctAnswer": "answer4"
        },
        {
            "question": "How many great lakes are there?",
            "answer0": "1",
            "answer1": "12",
            "answer2": "4",
            "answer3": "5",
            "correctAnswer": "answer4"
        },
    ];

    // const variables 
    const questionPoints = 1;
    const questionMax = 4;
    // console.log(ansBtn)


    $("#start-btn").on("click", startGame)

    function startGame() {
        $("#start-btn").hide();

        var timeInterval = setInterval(function () {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft === 0) {
                clearInterval(timeInterval);
            }
        }, 1000);

        questionCounter = 0;
        score = 0;
        availableQuestions = [...questionBank];
        console.log(availableQuestions)
        getNewQuestion();

    };

    // startGame();

    function getNewQuestion() {
        questionCounter++;
        questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        questionDisplay.innerText = currentQuestion.question;

        for (var i = 0; i < ansBtn.length; i++) {
            ansBtn[i].innerText = questionBank[questionIndex]["answer" + i];
        }

        // ansBtn.forEach(answer => {
        //     var number = answer.dataset["number"];
        //     answer.innerText = currentQuestion["answer" + number];

        // });

    };






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

};