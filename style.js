// DOM Variables
var body = document.body;
var timeEl = document.getElementById("timeIncrement");
var container = document.createElement("container");
var h2 = document.createElement("h2");
var p = document.createElement("p");
var button = document.createElement("button");

// Javascript Variables
var secondsLeft = 75;

// Variable Text Content
container.textContent = "";
h2.textContent = "Coding Quiz Challenge";
p.textContent =
  "Try to answer the following code-related question within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!";
button.textContent = "Start Quiz";

// Variable Set Attributes
h2.setAttribute("style", "text-align:center;margin-top:100px");
p.setAttribute(
  "style",
  "text-align:center;margin-left:33%;margin-right:33%;margin-top:20px;"
);
container.setAttribute("style", "margin:auto; width:50%;");
button.setAttribute(
  "style",
  "margin-left: 46%; margin-right: 30%;text-align: center;background-color:blue;border-radius: 7px;border:none;color:white; margin-top:20px"
);

// Variables Appending
body.appendChild(container);
container.appendChild(h2);
container.appendChild(p);
container.appendChild(button);

// var timerInterval = setInterval(function () {
//   secondsleft--;
//   timeEl.textContent = "Time " + secondsLeft;
//   //   setInterval();
//   console.log(secondsLeft);
//   body.append(timeEl);
// });

// Event Listener
button.addEventListener("click", function () {
  container.style.display = "none";
  if (secondsLeft > 0) {
    interval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
      // So renderTime() is called here once every second.
    }, 1000);
  }
});
