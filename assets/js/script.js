// the start page
var body = document.body;

// highscore button
var scoreBtnEl = document.createElement("button");
scoreBtnEl.textContent = "High Score";
body.appendChild(scoreBtnEl);

// timer
var timerStartEl = document.createElement("span");
timerStartEl.textContent = "Timer: " + String.timerEl;
body.appendChild(timerStartEl);
timerStartEl.setAttribute("style", "float:right; margin:10px 20px");
timerStartEl.setAttribute("id", "timer");

var timerEl = document.getElementById("timer");
function countdown() {
	var timeLeft = 90;

	var timeInterval = setInterval(function () {
		if (timeleft >= 1) {
			timerEl.textContent = timeLeft;
			timeLeft--;
		} else {
			timerEl.textContent = 0;
			clearInterval(timeInterval);
			displayMessage();
		}
	}, 1000);
	return countdown;
} // how to display timer

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

// maybe do addeventlistener(click) button and display nexst question

// randomize questions and answers

// assign keywords to show right or wrong

// when finish questions, come to the final page to submit high score

// push key and string onto local storage
