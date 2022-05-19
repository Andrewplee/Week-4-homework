var startPageEl = document.getElementById("start-page");
var timerEl = document.getElementById("timer");
var startBtnEl = document.getElementById("start-btn");
var questionPageEl = document.getElementById("question-page");
var questionTitle = document.getElementById("questionTitle");
var submitPageEl = document.getElementById("submit-page");
var answerEl = document.getElementById("answerChoices");
var submitButton = document.getElementById("submit-Btn");
var fullNameInput = document.getElementById("full-name");
var answerChoicesEl = document.getElementById("answerChoices");
var answerbtn = document.querySelectorAll(".answerbtn");
var answerbutton1 = document.getElementById("answer1");
var answerbutton2 = document.getElementById("answer2");
var answerbutton3 = document.getElementById("answer3");
var answerbutton4 = document.getElementById("answer4");
var highscoreList = document.querySelector(".highscoreList");
var highscoreButton = document.querySelector(".highscore-button");
var highscorePage = document.querySelector("#highscore-page");
var finalScore = document.querySelector("#final-score");
var playagainButton = document.getElementById("reload");
answerbutton1.value = "answer1";
answerbutton2.value = "answer2";
answerbutton3.value = "answer3";
answerbutton4.value = "answer4";

// h1El.setAttribute("style", "order:1");

// directionEl.setAttribute("style", "order:2");

// start button
// startBtnEl.setAttribute("style", "order:3");

var questionBank = [
	{
		questions: "this is question 1",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer1",
	},
	{
		questions: "this is question 2",
		answers: ["2answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "2answer1",
	},
	{
		questions: "this is question 3",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer1",
	},
	{
		questions: "this is question 4",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer1",
	},
];
console.log(questionBank);

// timer
var timer = 89;
var timeInterval;
var countdown = function () {
	timeInterval = setInterval(function () {
		timerEl.textContent = "Timer: " + timer;
		timer--;
		if (timer <= 0) {
			submissionPage();
		}
	}, 1000);
};

//question page
var questionIndex = 0;
var score = 0;

var buildQuiz = function () {
	startPageEl.setAttribute("class", "hide");
	questionPageEl.removeAttribute("class", "hide");
	showQuestions();
};

var showQuestions = function () {
	var displayQuestion = questionBank[questionIndex];

	questionTitle.textContent = displayQuestion.questions;
	answerbutton1.textContent = displayQuestion.answers[0];
	answerbutton2.textContent = displayQuestion.answers[1];
	answerbutton3.textContent = displayQuestion.answers[2];
	answerbutton4.textContent = displayQuestion.answers[3];

	answerbutton1.addEventListener("click", checkAnswer);
	answerbutton2.addEventListener("click", checkAnswer);
	answerbutton3.addEventListener("click", checkAnswer);
	answerbutton4.addEventListener("click", checkAnswer);
};

var submissionPage = function () {
	clearInterval(timeInterval);
	submitPageEl.removeAttribute("class", "hide");
	questionPageEl.setAttribute("class", "hide");
	finalScore.textContent = score;
};

function checkAnswer() {
	if (this.innerText !== questionBank[questionIndex].actualAnswer) {
		timer -= 15;
		if (timer < 0) {
			timer = 0;
		}
		console.log("wrong");
	} else {
		score++;
		console.log("correct");
	}

	questionIndex++;

	if (questionBank.length === questionIndex) {
		submissionPage();
	} else {
		showQuestions();
	}
}

console.log(questionIndex);

startBtnEl.addEventListener("click", function () {
	buildQuiz();
	countdown();
});

// to push onto local storage, i need to create var list

var useStoredData = function () {
	var data = JSON.parse(localStorage.getItem("scoreboard"));

	console.log("Data", data);
	highscorePage.removeAttribute("class", "hide");
	submitPageEl.setAttribute("class", "hide");

	data.forEach(function (item) {
		var liEl = document.createElement("li");
		liEl.textContent = `${item.userName} has scored ${item.userScore}`;
		liEl.setAttribute("class", "child");
		highscoreList.appendChild(liEl);
	});
};

submitButton.addEventListener("click", function (event) {
	event.preventDefault();

	var highscore = {
		userScore: score,
		userName: fullNameInput.value.trim(),
	};

	var scoreArray = JSON.parse(localStorage.getItem("scoreboard")) || [];
	scoreArray.push(highscore);

	localStorage.setItem("scoreboard", JSON.stringify(scoreArray));
	useStoredData();
});

highscoreButton.addEventListener("click", function (event) {
	event.preventDefault();
	startPageEl.setAttribute("class", "hide");
	questionPageEl.setAttribute("class", "hide");
	submitPageEl.setAttribute("class", "hide");
	highscorePage.removeAttribute("class", "hide");
});

playagainButton.addEventListener("click", function () {
	location.reload();
});
