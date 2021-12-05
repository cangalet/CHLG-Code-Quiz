//Global Variables
var highScoresEl = document.getElementById("high-Scores");
var userScores = JSON.parse(localStorage.getItem("userInfo"));

if (userScores) {
    sortScores();
}

function sortScores() {

    userScores.sort(function (a, b) {
        return b.score - a.score;
    });

    displayScores();
};

function displayScores() {
    for (var i = 0; i < userScores.length; i++) {
        var span = document.createElement("span");
        span.textContent = userScores[i].name.concat(" with a score of ", userScores[i].score);
        highScoresEl.appendChild(span);
    }
};