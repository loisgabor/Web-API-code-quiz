// Variables---------------------------------------------------------------
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("startQuiz");
var timeEl = document.getElementById("timeIncrement");
var h2 = document.getElementById("h2");
var answerSection = document.getElementById("answerSection");
var userInputContainer = document.getElementById("userInput");
var feedback = document.getElementById("feedback");
var testQuestion = document.getElementById("testquestion");
welcomeContainer.setAttribute("style", "margin:auto; width:50%;");
var submitBtn = document.getElementById("submit");
var allDone = document.getElementById("all-done");
var yourScore = document.getElementById("your-score");
let secondsLeft = 100;
let currentStage = 0;
const penalty = 15;

// Function Definition---------------------------------------------------------------
function setTimer() {
  timeEl.textContent = secondsLeft;
  timeEl.textContent = "Time: " + secondsLeft;
  timerInterval = setInterval(function () {
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    } else {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
    }
  }, 1000);
}

function startGame() {
  $("#quiz").show();
  renderQuestion();
}

function renderQuestion() {
  if (currentStage === stages.length) {
    endQuiz();
  } else {
    testQuestion.innerHTML = "";
    userInputContainer = "";
    answerSection.innerHTML = "";
    console.log(`this is stage ${currentStage}`);
    testQuestion.textContent = stages[currentStage].question;
    testQuestion.setAttribute("style", "margin-top:30px; margin-bottom:20px");
    answerSection.innerHTML = "";

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
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  testQuestion.innerHTML = "";
  feedback.innerHTML = "";
  userInputContainer = "";
  answerSection.innerHTML = "";
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.setAttribute("style", "display:show");
  allDone.textContent = "All Done!";
  yourScore.textContent = "Your final score is " + secondsLeft;
}

//Save score-------------------------------------------------------------
function saveHighscore() {
  var initials = $("#initials").val();

  //Get scores from local storage----------------------------------------------
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  //Users score ------------------------------------------------------------
  var newScore = {
    initial: initials,
    score: secondsLeft,
  };
  console.log(initials);
  //Save score to local storage----------------------------------------------------
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  //Go to high scores page-----------------------------------------------------
  window.location.href = "highscores.html";
}

// Save score fn ------------------------------------------------------------
function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}
console.log(submitBtn);
//Submit score------------------------------------------------------------
// Event Listeners---------------------------------------------------
submitBtn.addEventListener("click", saveHighscore);

startButton.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  setTimer();
  startGame();
});

answerSection.addEventListener("click", function (event) {
  feedback.setAttribute("class", "feedback");
  feedback.setAttribute("style", "margin:auto; width:50%;");
  var element = event.target;

  if (element.matches("button") === true) {
    console.log(element.getAttribute("data-value"));
    if (element.getAttribute("data-value") !== stages[currentStage].answer) {
      feedback.textContent = "Wrong!";
      secondsLeft = secondsLeft - penalty;
      setTimeout(fade_out, 1000);
      timeEl.textContent = "Time: " + secondsLeft;
      console.log("hey");
      currentStage++;
      renderQuestion();
    } else {
      feedback.textContent = "Correct!";
      setTimeout(fade_out, 500);
      console.log("boo");
      currentStage++;
      renderQuestion();
    }
  }
});

function fade_out() {
  $("#feedback").fadeOut().empty();
}
