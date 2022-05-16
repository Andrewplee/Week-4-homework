// the start page
var body = document.body;

// highscore button
var scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "High Score";
body.appendChild(scoreBtnEl);

// sort the score number
// find a to push up to local storage and pull local storage
// highscore as key

// get the time and parse display as list

// timer
var timerStartEl = document.createElement("span");
body.appendChild(timerStartEl);
timerStartEl.setAttribute("style", "float:right; margin:10px 20px");
timerStartEl.setAttribute("id", "timer");
var timerEl = document.getElementById("timer");
var timer = "";
timerEl.textContent = "Timer: " + timer;
function countdown(event) {
	event.stopPropagation();
	timer = 90;

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

// start page
var startBlockEl = document.createElement("div");
body.appendChild(startBlockEl);
startBlockEl.setAttribute(
	"style",
	"justify-content:center; text-align:center; margin: auto; border: 1px solid lightgrey; display:flex; flex-wrap: wrap; width: 20%;"
);

var h1El = document.createElement("h1");
h1El.textContent = "Code Quiz Challenge";
startBlockEl.appendChild(h1El);
h1El.setAttribute("style", "order:1");

var directionEl = document.createElement("p");
directionEl.textContent =
	"Answer the following multiple choice questions. There are no wrong answers. :)";
startBlockEl.appendChild(directionEl);
directionEl.setAttribute("style", "order:2");

// start button
var startBtnEl = document.createElement("button");
startBtnEl.textContent = "Start!";
startBlockEl.appendChild(startBtnEl);
startBtnEl.setAttribute("style", "order:3");
startBtnEl.addEventListener("click", function () {
	// event.stopPropagation();
	buildQuiz();
});

// console.log(countdown());

var questionID = 0;

var questionBank = [
	{
		questions: "this is question 1",
		choices: ["answer1", "answer1", "answer1", "answer1"],
		actualAnswer: "actualAnswer1",
	},
	{
		questions: "this is question 2",
		choices: ["answer2", "answer2", "answer2", "answer2"],
		actualAnswer: "actualAnswer2",
	},
	{
		questions: "this is question 3",
		choices: ["answer3", "answer3", "answer3", "answer3"],
		actualAnswer: "actualAnswer3",
	},
	{
		questions: "this is question 4",
		choices: ["answer4", "answer4", "answer4", "answer4"],
		actualAnswer: "actualAnswer4",
	},
];

var buildQuiz = function () {
	let {questions, choices, actualAnswer} = questions[questionID];
	document.querySelector(h1El) = ` <h1> ${questions} <h1>`;  // help here
	var answerList = document.createElement("div");
	answerList.setAttribute("class", "answerList");
	startBlockEl.appendChild(answerlist);  // help here
	for (i = 0; i < choices.length; i++) {
		var answerButton = document.createElement("button");
		answerButton.setAttribute("class", "answerButton")
		answerButton.textContent = choices[i]
		answerList.appendChild(answerButton)
	};

};

// when finish questions, come to the final page to submit high score

// push key and string onto local storage
