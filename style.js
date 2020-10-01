// DOM Variables
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("startQuiz");
var timeEl = document.getElementById("timeIncrement");
var h2 = document.getElementById("h2");
var answerSection = document.getElementById("answerSection");
var userInputContainer = document.getElementById("userInput");
var feedback = document.getElementById("feedback");
var testQuestion = document.getElementById("testquestion");
welcomeContainer.setAttribute("style", "margin:auto; width:50%;");

// Javascript Variables
var secondsLeft = 75;
var penalty = 10;
var currentStage = 0;

var stages = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: "2. curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all the above",
    ],
    correctAnswer: "4. all the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console log",
    ],
    correctAnswer: "4. console log",
  },
];

function setTimer() {
  timeEl.textContent = secondsLeft;
  timerInterval = setInterval(function () {
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    } else {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
    }
  }, 1000);
}

function renderQuestion() {
  testQuestion.innerHTML = "";
  testQuestion.textContent = stages[currentStage].question;
  testQuestion.setAttribute("style", "margin-top:30px; margin-bottom:20px");
  answerSection.innerHTML = "";

  // Render answer buttons
  for (var i = 0; i < stages[currentStage].choices.length; i++) {
    var choiceButtons = document.createElement("button");
    choiceButtons.setAttribute(
      "style",
      "background-color:purple; color:white; display: block; margin-bottom:15px"
    );
    choiceButtons.setAttribute("data-value", stages[currentStage].choices[i]);
    choiceButtons.textContent = stages[currentStage].choices[i];
    answerSection.append(choiceButtons);
  }
  if (currentStage === stages.length) {
    testQuestion.innerHTML = "";
    userInputContainer = "";
    answerSection.innerHTML = "";
    endQuiz();
  } else {
    renderQuestion();
    // No more quiz questions
  }
}

function showScore() {
  clearInterval(timerInterval);
  if (timeRemaining < 0) {
    // Eliminates negative scoring
    timeRemaining = 0;
    timer.textContent = 0;
  }
}
function endQuiz() {
  // stopQuizTimer();
  userInputContainer.innerHTML = "";
  feedback.innerHTML = "";
  testQuestion.innerHTML = "";
  answerSection.setAttribute("style", "display:hide");
  console.log(answerSection);
  var allDoneEl = document.getElementById("all-done");
  allDoneEl.setAttribute("style", "h1");
  answerContainer.textContent = "none";
  allDoneEl.textContent = "All done!";
  answerContainer.textContent = "Your final score is " + secondsLeft;
  var initialInput = document.createElement("label");
  initialInput.setAttribute("type", "text");
  initialInput.setAttribute("id", "initialInput");
  initialInput.textContent = "";
  answerContainer.append(initialInput);
  var submitScoreButton = document.createElement("button");
  submitScoreButton.textContent = "Submit Score";
  submitScoreButton.setAttribute(
    "style",
    "display:block; background-color: indigo; color: white; margin: 5px"
  );
  submitScoreButton.setAttribute("src", "!url(./assets/highscores.html)");
  answerContainer.append(submitScoreButton);
}

h2.setAttribute("style", "margin-top:30px; margin-bottom:20px");
startButton.setAttribute("style", "margin-top:20px");
userInputContainer.setAttribute("style", "margin:auto; width:50%;");

startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  setTimer();
  renderQuestion();
});

answerSection.addEventListener("click", function (event) {
  feedback.setAttribute("class", "feedback");
  feedback.setAttribute("style", "margin:auto; width:50%;");
  var element = event.target;
  // var correctAnswer = stages[currentStage].correctAnswer;
  // console.log(correctAnswer);
  if (element.matches("button") === true) {
    console.log(element.getAttribute("data-value"));
    if (
      element.getAttribute("data-value") !== stages[currentStage].correctAnswer
    ) {
      feedback.textContent = "Wrong";
      secondsLeft = secondsLeft - penalty;
      currentStage++;
      renderQuestion();
    } else {
      feedback.textContent = "Correct!";
      currentStage++;
      renderQuestion();
    }
  }
});
