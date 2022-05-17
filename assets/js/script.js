var blockEl = document.getElementById("block");
var startPageEl = document.getElementById("start-page");
var timerEl = document.getElementById("timer");
var startBtnEl = document.getElementById("start-btn");
var questionPageEl = document.getElementById("question-page");
var questionTitle = document.getElementById("questionTitle");
var submagePageEl = document.getElementById("submit-page");
var answerEl = document.getElementById("answerChoices");
var submitButton = document.getElementById("submit-btn");
var fullNameInput = document.getElementById("full-name");
var answerChoicesEl = document.getElementById("answerChoices");
var answerbutton1 = document.getElementById("answer1");
var answerbutton2 = document.getElementById("answer2");
var answerbutton3 = document.getElementById("answer3");
var answerbutton4 = document.getElementById("answer4");
answerbutton1.value = "answer1";
answerbutton2.value = "answer2";
answerbutton3.value = "answer3";
answerbutton4.value = "answer4";

// start page
blockEl.setAttribute(
	"style",
	"justify-content:center; text-align:center; margin: auto; border: 1px solid lightgrey; display:flex; flex-wrap: wrap; width: 20%;"
);

// h1El.setAttribute("style", "order:1");

// directionEl.setAttribute("style", "order:2");

// start button
// startBtnEl.setAttribute("style", "order:3");

var questionBank = [
	{
		questions: "this is question 1",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer4",
	},
	{
		questions: "this is question 2",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer3",
	},
	{
		questions: "this is question 3",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer2",
	},
	{
		questions: "this is question 4",
		answers: ["answer1", "answer2", "answer3", "answer4"],
		actualAnswer: "answer1",
	},
];

// timer
timerEl.setAttribute(
	"style",
	"float:right; margin:10px 20px",
	"display:inline-block"
);

var timer = 90;
var countdown = function () {
	var timeInterval = setInterval(function () {
		if (timer >= 1) {
			timerEl.textContent = "Timer: " + timer;
			timer--;
		} else {
			timerEl.textContent = "Timer: " + 0;
			clearInterval(timeInterval);
		}
	}, 1000);
};

//question page
var questionIndex = 0;
var score = 0;
var displayQuestion = questionBank[questionIndex];

var buildQuiz = function () {
	startPageEl.setAttribute("class", "hide");
	questionPageEl.removeAttribute("class", "hide");
	showQuestions();
};

var showQuestions = function () {
	questionTitle.textContent = displayQuestion.questions;
	answerbutton1.textContent = displayQuestion.answers[0];
	answerbutton2.textContent = displayQuestion.answers[1];
	answerbutton3.textContent = displayQuestion.answers[2];
	answerbutton4.textContent = displayQuestion.answers[3];
};

answerChoicesEl.onClick = function (event) {
	if (event.target.value !== displayQuestion.actualAnswer) {
		timer -= 5;
		console.log(event.target.value);
		questionIndex++;
	} else {
		questionIndex++;
		score++;
	}
};

startBtnEl.addEventListener("click", function () {
	buildQuiz();
	countdown();
});

// to push onto local storage, i need to create var list
submitButton.addEventListener("click", function (event) {
	event.preventDefault();

	var highscore = {
		userScore: count,
		userName: fullNameInput.value.trim(),
	};

	function dynamicallyAdd(addHighscore) {
		var scoreArray = JSON.parse(localStorage.getItem("scoreboard")) || [];
		scoreArray.push(addHighscore);

		localStorage.setItem("scoreboard", JSON.stringify(scoreArray));
		useStoredData();
	}
	dynamicallyAdd(highscore.push);
});
// when finish questions, come to the final page to submit high score

// push key and string onto local storage

// var checkAnswers = function () {
// 	if (this.value !== questionBank[questionIndex].actualAnswer) {
// 		timer -= 5;
// 		if (timer < 0) {
// 			timer = 0;
// 		}
// 		timerEl.textContent = timer;
// 	}

// 	console.log(timer);
// questionIndex++;

// if (questionIndex !== questionBank.length) {
// 	buildQuiz();
// } else {
// 	return;
// 	// }
// };
