var startPageEl = document.getElementById("start-page");
var timerEl = document.getElementById("timer");
var startBtnEl = document.getElementById("start-btn");
var questionPageEl = document.getElementById("question-page");
var submagePageEl = document.getElementById("submit-page");

// timer
timerEl.setAttribute("style", "float:right; margin:10px 20px", "display:inline-block");
// timerStartEl.setAttribute("id", "timer");
// timerEl.textContent = "Timer: " + timer;
function countdown() {
	// event.stopPropagation();
	var timer = 90;

	var timeInterval = setInterval(function () {
		if (timer >= 1) {
			timerEl.textContent = "Timer: " + timer;
			timer--;
		} else {
			timerEl.textContent = 0;
			clearInterval(timeInterval);
			displayMessage();
		}
	}, 1000);
}
// countdown();

// start page
// startBlockEl.setAttribute(
	// "style",
	// "justify-content:center; text-align:center; margin: auto; border: 1px solid lightgrey; display:flex; flex-wrap: wrap; width: 20%;"
// );

// h1El.setAttribute("style", "order:1");

// directionEl.setAttribute("style", "order:2");

// start button
// startBtnEl.setAttribute("style", "order:3");

startBtnEl.addEventListener("click", buildQuiz());

var questionBank = [
	{
		questions: "this is question 1",
		answers: ["answer1", "answer1", "answer1", "answer1"],
		actualAnswer: "actualAnswer1",
	},
	{
		questions: "this is question 2",
		answers: ["answer2", "answer2", "answer2", "answer2"],
		actualAnswer: "actualAnswer2",
	},
	{
		questions: "this is question 3",
		answers: ["answer3", "answer3", "answer3", "answer3"],
		actualAnswer: "actualAnswer3",
	},
	{
		questions: "this is question 4",
		answers: ["answer4", "answer4", "answer4", "answer4"],
		actualAnswer: "actualAnswer4",
	},
];

var questionID = 0;

var buildQuiz = function () {
	countdown();
	let {questions, answers, actualAnswer} = questions[questionID];
	console.log

	document.querySelector(h1El) = ` <h1> ${questions} <h1>`;  // help here
	var answerList = document.createElement("div");
	answerList.setAttribute("class", "answerList");
	startBlockEl.appendChild(answerlist);  // help here
	for (i = 0; i < answers.length; i++) {
		var answerButton = document.createElement("button");
		answerButton.setAttribute("class", "answerButton")
		answerButton.textContent = answers[i]
		answerList.appendChild(answerButton)
	};

};

// when finish questions, come to the final page to submit high score

// push key and string onto local storage
