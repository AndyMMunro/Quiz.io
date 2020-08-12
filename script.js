window.onload = function () {

    // Timer variables
    var timerEl = document.getElementById("countdown-timer");
    var timeLeft = 60;

    // quiz variables 
    var questionDisplay = document.getElementById("question-display");
    var ansBtn = Array.from(document.getElementsByClassName("ans-btn"));
    var questionCounterDisplay = document.getElementsByClassName("question-counter")
    var highScoreName = $(".high-score-name")
    var lastScore = $(".last-score")
    var scoreDisplay = document.getElementById("scoreboard")
    var score = 0;
    var questionCounter = 0;
    var winners = {
        finishScores: 0,
        name: "",
    }



    var questionBank = [
        {
            question: "what is a duck?",
            answer: ["cat", "dog", "bird", "fish",],
            correctAnswer: "bird"
        },
        {
            question: "how much is a dozen?",
            answer: ["1", "12", "6", "24"],
            correctAnswer: "12"
        },
        {
            question: "what planet is closest to the sun?",
            answer: ["Earth", "Saturn", "Mercury", "Uranus",],
            correctAnswer: "Mercury"
        },
        {
            question: "what currency is the Dong from?",
            answer: ["Thailand", "Australia", "Philippines", "Vietnam",],
            correctAnswer: "Vietnam"
        },
        {
            question: "How many great lakes are there?",
            answer: ["5", "12", "4", "1",],
            correctAnswer: "5"
        },
    ];


    $(".high-score").hide();
    $("save-score-btn").hide();

    $("#start-btn").on("click", startGame)

    localStorage.getItem(winners)
    lastScore.innerText = winners;

    console.log(lastScore);

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

        getNewQuestion();

    };


    function getNewQuestion() {
        // stop question cycle

        if (questionCounter < questionBank.length) {

            questionDisplay.innerText = questionBank[questionCounter].question;

            for (var i = 0; i < ansBtn.length; i++) {

                ansBtn[i].innerText = questionBank[questionCounter].answer[i];
            };

        }
        else {
            endGame();
        };

    };


    function endGame() {
        // use code from the todo list activity to create the high score list 
        // display score in the end game function 
        // then add a click event to save the score and name entered 

        $(".high-score").show();
        $("save-score-btn").show();
        $("article").hide();

        // highScoreDisplay.innerHTML = "your score is:" + score;
        scoreDisplay.textContent = "your score is:" + score;

        // storeScore();
    };

    $(".save-score-btn").on("click", function (event) {

        winners.finishScores = score;
        winners.name = highScoreName.val();
        console.log(highScoreName.val());

        console.log("you saved");


        localStorage.setItem("winners", JSON.stringify(winners));

        console.log(localStorage);
    });




    $("#answer-btns").on("click", function (event) {


        // console.log(event.target.innerText)
        // console.log(event.target)
        // console.log(questionBank[questionIndex]["correctAnswer"])

        // validator for correct answer

        // console.log(event.target.innerText);
        // console.log(questionBank[questionCounter].correctAnswer);

        var correctInput = event.target.innerText

        if (correctInput === questionBank[questionCounter].correctAnswer) {

            score = score + 1;

            // console.log("it worked");

            timeLeft = timeLeft + 10;

        }
        else {
            timeLeft = timeLeft - 10;
        }
        console.log(score);
        scoreDisplay.textContent = score;

        questionCounter++;
        questionCounterDisplay[0].textContent = questionCounter;

        getNewQuestion();




    });

};
