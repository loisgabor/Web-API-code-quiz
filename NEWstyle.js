var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("startQuiz");
var timeEl = document.getElementById("timeIncrement");
var h2 = document.getElementById("h2");
var answerSection = document.getElementById("answerSection");
var userInputContainer = document.getElementById("userInput");
var feedback = document.getElementById("feedback");
var test = document.getElementById("test");


// Javascript Variables
var secondsLeft = 75;
var penalty = 10;
var i = 0;
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
    correctAnswer: "d. all the above",
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
function setTimer(){
    timeEl.textContent = secondsLeft;
    timerInterval = setInterval(function(){
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            showScore();
          }else {
              secondsLeft--;
              timeEl.textContent = "Time: " + secondsLeft;
      
          }
        }, 1000);
      }
        
    })

  // function validateAnswer() {
//   feedback.setAttribute("class", "feedback");
//   feedback.setAttribute("style", "margin:auto; width:50%;");
//   var currentQuestion = stages[currentStage].question;
//   currentQuestion.textContent = function () {
//     if (this.value !== currentQuestion.correctAnswer) {
//       feedback.textContent = "Wrong";
//       secondsLeft = secondsLeft - penalty;
//     } else {
//       feedback.textContent = "Correct!";
//     }
//     console.log(feedback);
//     currentStage++;
//   };
// }
// if (this.value !== currentQuestion.correctAnswer) {
//   feedback.textContent = "Wrong";
//   secondsLeft = secondsLeft - penalty;
// } else {
//   feedback.textContent = "Correct!";
// }
// setTimeout(function () {
//   feedback.setAttribute("class", "feedback hide");
//   // feedback.setAttribute("style", "display:none");
// }, 1000);
// currentStage++;
// renderQuestion();
// () {
//     welcomeContainer.style.display = "none";
//     // interval = setInterval(function () {
//     timeEl.textContent = "Time: " + secondsLeft;
//     secondsLeft--;
//     if (secondsLeft === 0) {
//       clearInterval(interval);
//     }
// }, 1000);


// define functions

// Event Listener

// userInputContainer.addEventListener(
//   "click",
//   function (event) {
//     var element = event.target;
//     var correctAnswer = stages[currentStage].correctAnswer;
//     console.log(correctAnswer);
//     if (element.matches("button") === true) {
//       var choices = element.getAttribute("data-value");
//       var createDiv = document.createElement("div");
//       createDiv.innerHTML = "";
//     }

//     currentStage++;
//     renderQuestion();
//     renderAnswerSection();
//   }

// );
// function renderQuestion() {
//   // test.innerHTML = "";
//   var testQuestion = document.getElementById("testquestion");
//   testQuestion.textContent = stages[currentStage].question;
//   console.log(testQuestion);
//   // questionHeader.setAttribute("style", "margin-top:30px; margin-bottom:20px");
//   // test.append(questionHeader);
//   renderAnswerSection();
// }

// function renderQuestion() {
//   question.innerHTML = "";
//   question.textContent = stages[currentStage].question;
//   question.textContent = stages[currentStage].question[questionIndex];
//   question.setAttribute("style", "margin-top:30px; margin-bottom:20px");
//   console.log(question);
//   renderAnswerSection();
// }
// -------------------------------------------------------------------------------------------
// function renderAnswerSection() {
//   answerSection.innerHTML = "";
//   for (var i = 0; i < stages[currentStage].choices.length; i++) {
//     var choiceButtons = document.createElement("button");
//     choiceButtons.setAttribute(
//       "style",
//       "background-color:purple; color:white; display: block; margin-bottom:15px"
//     );
//     choiceButtons.setAttribute("data-value", stages[i].choices[i]);
//     choiceButtons.textContent = stages[i].choices[i];
//     answerSection.append(choiceButtons);
//   }
//   validateAnswer();
// }

// Variable Set Attributes