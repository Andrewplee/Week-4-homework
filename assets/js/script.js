// the start page
var body = document.body;

var startBlock = document.createElement("div");
body.appendChild(startBlock);
startBlock.setAttribute(
	"style",
	"justify-content:center; text-align:center; margin: 500px auto; border: 1px solid lightgrey; display:flex; flex-wrap: wrap; width: 20%;"
);

var h1El = document.createElement("h1");
h1El.textContent = "Code Quiz Challenge";
startBlock.appendChild(h1El);
h1El.setAttribute("style", "order:1");

var directionEl = document.createElement("p");
directionEl.textContent =
	"Answer the following multiple choice questions. There are no wrong answers. :)";
startBlock.appendChild(directionEl);
directionEl.setAttribute("style", "order:2");

var startBtn = document.createElement("button");
startBtn.textContent = "Start!";
startBlock.appendChild(startBtn);
startBtn.setAttribute("style", "order:3");

var scoreBtn = document.createElement("button");
scoreBtn.textContent = "Highscore!";
startBlock.appendChild(scoreBtn);
