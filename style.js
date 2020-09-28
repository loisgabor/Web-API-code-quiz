// DOM Variables
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("startQuiz");
var body = document.body;
var timeEl = document.getElementById("timeIncrement");
var h2 = document.getElementById("h2");
var question = document.getElementById("question");
var options = document.getElementById("options");

// Javascript Variables
var secondsLeft = 75;
var currentStage = 0;
var questions = [
  {
    name: "Commonly used data types DO NOT include:",
    answer: {
      a: "1. strings",
      b: "2. booleans",
      c: "3. alerts",
      d: "4. numbers",
    },
    correctAnswer: "c",
  },
  {
    name: "The condition in an if/else statement is enclosed within _____.",
    answer: {
      a: "1. quotes",
      b: "2. curly brackets",
      c: "3. parentheses",
      d: "4. square brackets",
    },
    correctAnswer: "3. parentheses",
  },
  {
    name: "Arrays in JavaScript can be used to store _____.",
    answer: {
      a: "1. numbers and strings",
      b: "2. other arrays",
      c: "3. booleans",
      d: "4. all the above",
    },
    correctAnswer: "4. all the above",
  },
  {
    name:
      "String values must be enclosed within _____ when being assigned to variables.",
    answer: {
      a: "1. commas",
      b: "2. curly brackets",
      c: "3. quotes",
      d: "parentheses",
    },
    correctAnswer: "3. quotes",
  },
  {
    name:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: {
      a: "1. JavaScript",
      b: "2. terminal/bash",
      c: "3. for loops",
      d: "4. console log",
    },
    correctAnswer: "4. console log",
  },
];

// Variable Text Content
// welcomeContainer.textContent = "";

// Variable Set Attributes
welcomeContainer.setAttribute("style", "margin:auto; width:50%;");
h2.setAttribute("style", "margin-top:30px; margin-bottom:20px");
startButton.setAttribute("style", "margin-top:20px");

// define functions

// Event Listener
startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  if (secondsLeft > 0) {
    interval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
      // So renderTime() is called here once every second.
    }, 1000);
    renderOptions();
  }
});
renderOptions();
function renderOptions() {
  var question1 = questions[currentStage].name;
  for (var i = 0; i < question1; i++) {
    var optionsToDisplay = questions[currentStage].answers;
    var value = renderOptions(optionsToDisplay);
    console.log(value);
  }
}
