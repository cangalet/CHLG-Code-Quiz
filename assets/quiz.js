// Global HTML Elements
var startBtnEl = document.getElementById("start-Btn");
var quizBoxEl = document.getElementById("quiz-Box");
var questionTextEl = document.querySelector(".questionText");

// Global Variables
var questionCount = 0;
var timeValue = 75;

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
];

// remove Start button
function removeStart() {
    startBtnEl.remove();
};

// Timer function
function startTimer(){
    var timer = setInterval(function(){
        document.getElementById("time-Sec").innerHTML=timeValue;
        timeValue--;
        if (timeValue < 0) {
            clearInterval(timer);
        }
    }, 1000);
};

// create quiz Question
// function showQuiz() {
//     // Create and show Quiz Container
    
//     var quizBoxEl = document.createElement("div");
//     quizBoxEl.setAttribute("id", "quiz-Box");
//     quizBoxEl.setAttribute("class", "quizBox");
//     document.body.appendChild(quizBoxEl);

//     // Create and show Quiz Question
//     var questionTextHeaderEl = document.createElement("header");
//     quizBoxEl.appendChild(questionTextHeaderEl);
//     var questionTextEl = document.createElement("div");
//     questionTextEl.setAttribute("class", "questionText");
//     questionTextHeaderEl.appendChild(questionTextEl);
//     questionTextEl.textContent = questions[questionCount].question;

//     // Create and show Quiz Options
//     questions[questionCount].options.forEach(function (answers) {
//         var questionOptionsContainerEl = document.createElement("section");
//         quizBoxEl.appendChild(questionOptionsContainerEl);
//         var questionOptionsEl = document.createElement("div");
//         questionOptionsEl.setAttribute("class", "questionText");
//         questionOptionsContainerEl.appendChild(questionOptionsEl);
//         questionOptionsEl.textContent = questions[questionCount].options;
//     }
// };

// show Quiz Question
function showQuiz() {
    quizBoxEl.classList.add("activeQuiz"); //show quiz box
    
    questionTextEl.textContent = questions[questionCount].question;
};

// Quiz Start
function startQuiz() {
    showQuiz();
    removeStart();
    startTimer();
    
};

// Event listener, trigger function to start
startBtnEl.addEventListener("click", startQuiz);