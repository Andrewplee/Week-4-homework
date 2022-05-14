// the start page
var body = document.body;

// highscore button
var scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "High Score";
body.appendChild(scoreBtnEl);

// display ending screen / high score screen
var displayMessage = function () {};

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
	"justify-content:center; text-align:center; margin: 500px auto; border: 1px solid lightgrey; display:flex; flex-wrap: wrap; width: 20%;"
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

var startBtnEl = document.createElement("button");
startBtnEl.textContent = "Start!";
startBlockEl.appendChild(startBtnEl);
startBtnEl.setAttribute("style", "order:3");
startBtnEl.addEventListener("click", function (event) {
	event.stopPropagation();
});

console.log(countdown());
// maybe do addeventlistener(click) button and display next question

// randomize questions and answers (forms)
//

// array of objects and add an index that goes up.
//
var questionBank = [
	{
		questions: "this is question 1",
		choices: ["answer1", "answer1", "answer1", "answer1"],
		actualAnswer: "actualAnswer1",
	},
	{
		questions: "this is question 1",
		choices: ["answer1", "answer1", "answer1", "answer1"],
		actualAnswer: "actualAnswer1",
	},
	{
		questions: "this is question 1",
		choices: ["answer1", "answer1", "answer1", "answer1"],
		actualAnswer: "actualAnswer1",
	},
	{
		questions: "this is question 1",
		choices: ["answer1", "answer1", "answer1", "answer1"],
		actualAnswer: "actualAnswer1",
	},
];

// assign keywords to show right or wrong

// when finish questions, come to the final page to submit high score

// push key and string onto local storage
