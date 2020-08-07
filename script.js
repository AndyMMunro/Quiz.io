window.onload = function () {

    // Timer variables
    var timerEl = document.getElementById("countdown-timer");
    var timeLeft = 60;

    // quiz variables 
    var questionDisplay = document.getElementById("question-display");
    var ansBtn = Array.from(document.getElementsByClassName("ans-btn"));
    var questionCounterDisplay = document.getElementsByClassName("question-counter")
    var scoreDisplay = document.getElementById("scoreboard")
    var questionIndex = 0;
    var score = 0;
    var questionCounter = 0;
    var currentQuestion = {};
    var availableQuestions = [];

    var correctAnswer;

    var questionBank = [
        {
            question: "what is a duck?",
            answer0: "cat",
            answer1: "dog",
            answer2: "bird",
            answer3: "fish",
            correctAnswer: "answer2"
        },
        {
            question: "how much is a dozen?",
            answer0: "1",
            answer1: "12",
            answer2: "6",
            answer3: "24",
            correctAnswer: "answer1"
        },
        {
            question: "what planet is closest to the sun?",
            answer0: "Earth",
            answer1: "Saturn",
            answer2: "Mercury",
            answer3: "Uranus",
            correctAnswer: "answer2"
        },
        {
            question: "what currency is the Dong from?",
            answer0: "Thailand",
            answer1: "Australia",
            answer2: "Philippines",
            answer3: "Vietnam",
            correctAnswer: "answer3"
        },
        {
            question: "How many great lakes are there?",
            answer0: "5",
            answer1: "12",
            answer2: "4",
            answer3: "1",
            correctAnswer: "answer0"
        },
    ];


    $("#start-btn").on("click", startGame)

    function startGame() {
        $("#start-btn").hide();
        $(".hide").show();
        questionCounter = 0;
        score = 0;

        var timeInterval = setInterval(function () {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft === 0) {
                clearInterval(timeInterval);

            }
        }, 1000);

        availableQuestions = [...questionBank];
        // console.log(availableQuestions)
        getNewQuestion();

    };


    function getNewQuestion() {

        if (availableQuestions.length === 0) {
            alert("stop fucking clicking ass")
            return;
        }
        // for (var i = 0; i < questionDisplay.length; i++) {
        //     questionDisplay[i].innerText = availableQuestions;
        // }
        // questionIndex = Math.floor(Math.random() * availableQuestions.length);
        // questionIndex = Math.floor(availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        questionDisplay.innerText = currentQuestion.question;

        for (var i = 0; i < ansBtn.length; i++) {

            ansBtn[i].innerText = availableQuestions[questionIndex]["answer" + i];

        }
        // console.log(availableQuestions)

        availableQuestions.splice(questionIndex, 1)


        questionCounter++;
        // console.log(questionCounter)
        // console.log(questionCounterDisplay)
        questionCounterDisplay[0].textContent = questionCounter;
    }



    $("#answer-btns").on("click", function (event) {


        console.log(event.target.innerText)
        console.log(event.target)
        console.log(questionBank[questionIndex]["correctAnswer"])

        // for (var i = 0; i < correctAnswer.length; i++) {

        //     correctAnswer[i].innerText = availableQuestions[questionIndex]["correctAnswer" + i];

        if (event.target.id === questionBank[questionIndex]["correctAnswer"]) {
            score++;
            timeLeft = timeLeft + 10;
        }
        else {
            timeLeft = timeLeft - 10;
        }

        scoreDisplay.textContent = score;

        getNewQuestion();


    });

}



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