var startPageEl = document.getElementById("start-page");
var timerEl = document.getElementById("timer");
var startBtnEl = document.getElementById("start-btn");
var questionPageEl = document.getElementById("question-page");
var submagePageEl = document.getElementById("submit-page");
var answerEl = document.getElementById("answerChoices");

// timer
timerEl.setAttribute(
	"style",
	"float:right; margin:10px 20px",
	"display:inline-block"
);

var timer = 90;

function countdown() {
	// event.stopPropagation;

	var timeInterval = setInterval(function () {
		if (timer >= 1) {
			timerEl.textContent = "Timer: " + timer;
			timer--;
		} else {
			timerEl.textContent = 0;
			clearInterval(timeInterval);
			// displayMessage();
		}
	}, 1000);
}

// start page
startPageEl.setAttribute(
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

var questionIndex = 0;

var buildQuiz = function () {
	var displayQuestion = questionBank[questionIndex];
	var questionTitle = document.querySelector(".question-title");
	questionTitle.textContent = displayQuestion.questions;

	displayQuestion.answers.forEach(function (answer, i) {
		var answerChoicesEl = document.createElement("button");
		answerChoicesEl.setAttribute("class", "answer");
		answerChoicesEl.setAttribute("value", answer);
		answerChoicesEl.textContent = i + 1 + ". " + answer;
		answerEl.appendChild(answerChoicesEl);

		answerChoicesEl.onClick = questionIndex++;
	});
};

if (timer === 0) {
	document.location.href = "./highscore.html";
}

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

// document.querySelector(h1El) = ` <h1> ${questions} <h1>`;  // help here
// var answerList = document.createElement("div");
// answerList.setAttribute("class", "answerList");
// startBlockEl.appendChild(answerlist);  // help here
// for (i = 0; i < answers.length; i++) {
// 	var answerButton = document.createElement("button");
// 	answerButton.setAttribute("class", "answerButton")
// 	answerButton.textContent = answers[i]
// 	answerList.appendChild(answerButton)
// };

startBtnEl.addEventListener("click", function () {
	buildQuiz();
	countdown();
});
// when finish questions, come to the final page to submit high score

// push key and string onto local storage
