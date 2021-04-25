const btnAlert = document.querySelector(".btn-alert");
const btnChangeBackground = document.querySelector(".btn-change-background");

const toggleColor = function () {
  document.body.classList.toggle("red-background");
};

const showAlert = function () {
  alert("Button clicked");
};

btnAlert.addEventListener("click", showAlert);

btnChangeBackground.addEventListener("click", toggleColor);
