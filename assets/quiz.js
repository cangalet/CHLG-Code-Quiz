// Global HTML Elements
var startBtnEl = document.getElementById("start-Btn");
var quizBoxEl = document.getElementById("quiz-Box");
var highScoreFormContainerEl = document.getElementById("high-Score-Form-Container");
var questionTextEl = document.querySelector(".containerHeader");
var questionOptionsEl = document.querySelector(".questionOptions");
var questionResponseEl = document.querySelector(".questionResponse");


// Global Variables
var questionCount = 0;
var timeLeft = 60;
var userScore = 0;
var userInfo = {
    name: "",
    score: 0
};

// Quiz Qustions:
var questions = [
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
        ]
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answer: "Math.min(x,y)",
        options: [
        "min(x,y);",
        "Math.min(x,y)",
        "Math.min(xy)",
        "min(xy);"
        ]
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answer: "Both",
        options: [
        "Client",
        "Server",
        "Both",
        "None"
        ]
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answer: "alert(“Hello DataFlair!”);",
        options: [
        "alertBox(“Hello DataFlair!”);",
        "alert(Hello DataFlair!);",
        "msgAlert(“Hello DataFlair!”);",
        "alert(“Hello DataFlair!”);"
        ]
    },
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
        ]
    }
];

// Timer function
function countDownTimer() {
    timeInterval  = setInterval(function(){
        document.getElementById("time-Sec").innerHTML=timeLeft;
        timeLeft--;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
};

function quizQuestions() {
    quizBoxEl.classList.add("activeQuiz"); //show quiz box
    countDownTimer();
    // show Quiz Question
    questionTextEl.textContent = questions[questionCount].question;

    // show Quiz Options
    questions[questionCount].options.forEach(function(answers) {
        var optionButtonEl = document.createElement("button");
        questionOptionsEl.appendChild(optionButtonEl);
        optionButtonEl.textContent = answers;
        optionButtonEl.addEventListener("click", correctAnswer);
     });
};

// Checks to see if the answered question is correct
function correctAnswer(event) {
    if (event.target.textContent === questions[questionCount].answer) {
        questionResponseEl.textContent = "Correct!"
        userScore++;
      } else {
        questionResponseEl.textContent = "Incorrect!"
        timeLeft -= 10;
      }
      questionCount++;
      nextQuestion();
}

// Next Question
function nextQuestion() {
    if (questionCount < questions.length) {
        questionOptionsEl.innerHTML = "";
        quizQuestions();
    } else {
      endQuiz();
    }
};

// Quiz Start
function startQuiz() {
    quizQuestions();
    startBtnEl.remove(); 
};

function endQuiz() {
    timeLeft = 0;
    quizBoxEl.remove();
    highScoreFormContainerEl.classList.add("activeForm"); //show User Initials form 
    clearInterval(timeInterval);
    localStorage.setItem("quizScore", userScore);
   // window.location.replace("highscores.html");
};

document.addEventListener("submit", function (event) {
    event.preventDefault();

    var parsed = JSON.parse(localStorage.getItem("userInfo"));
    
    if (parsed === null || parsed == undefined) {
        parsed = [];
    }

    var userName = document.querySelector("#user-name").value;

    userInfo.name = userName;
    userInfo.score = userScore;
    parsed.push(userInfo);

    localStorage.setItem('userInfo', JSON.stringify(parsed));
});

function submitLocation() {
    window.location.href = "highscores.html";
};

// Event listener, trigger function to start
startBtnEl.addEventListener("click", startQuiz);