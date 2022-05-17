var highscoreList = document.querySelector(".highscoreList");

function useStoredData() {
	var data = JSON.parse(localStorage.getItem("scoreboard"));

	data.forEach(function (item) {
		var liEl = document.createElement("li");
		liEl.textContent = `${item.userName} ${item.userScore}`;
		liEl.setAttribute("class", "child");
		highscoreList.appendChild(liEl);
	});
}

// var questionBank = [
// 	{
// 		questions: "this is question 1",
// 		answers: ["answer1", "answer2", "answer3", "answer4"],
// 		actualAnswer: "answer4",
// 	},
// 	{
// 		questions: "this is question 2",
// 		answers: ["answer1", "answer2", "answer3", "answer4"],
// 		actualAnswer: "answer3",
// 	},
// 	{
// 		questions: "this is question 3",
// 		answers: ["answer1", "answer2", "answer3", "answer4"],
// 		actualAnswer: "answer2",
// 	},
// 	{
// 		questions: "this is question 4",
// 		answers: ["answer1", "answer2", "answer3", "answer4"],
// 		actualAnswer: "answer1",
// 	},
// ];

// var questionIndex = 0;

// var buildQuiz = function () {
// 	while ((i = questionIndex || questionIndex < questionBank.length)) {
// 		var displayQuestion = questionBank[i];
// 		var questionTitle = document.querySelector(".question-title");
// 		questionTitle.textContent = JSON.stringify(displayQuestion.questions);
// 	}

// 	// for (i = questionIndex; i < questionBank.length; i++) {
// 	// 	var displayQuestion = questionBank[i];
// 	// 	var questionTitle = document.querySelector(".question-title");
// 	// 	questionTitle.textContent = displayQuestion.questions;
// 	// }
// 	console.log(questionTitle);
// };
// buildQuiz();
