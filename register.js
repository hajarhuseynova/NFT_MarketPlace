const inputUsername = document.getElementById("inputUsername");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputPasswordAgain = document.getElementById("inputPasswordAgain");
//p
const checkUsername = document.getElementById("checkUsername");
const checkEmail = document.getElementById("checkEmail");
const checkPassword = document.getElementById("checkPassword");
const checkPasswordAgain = document.getElementById("checkPasswordAgain");
//button
const registerConfirmButton = document.getElementById("registerConfirmButton");

inputUsername.addEventListener("keyup", () => {
  checkUsername.style.opacity = "1";
  if (inputUsername.value != "") {
    checkUsername.style.opacity = "0";
  }
});
inputEmail.addEventListener("keyup", () => {
  checkEmail.style.opacity = "1";
  if (inputEmail.value != "") {
    checkEmail.style.opacity = "0";
  }
});
inputPassword.addEventListener("keyup", () => {
  checkPassword.style.opacity = "1";
  if (inputPassword.value != "") {
    checkPassword.style.opacity = "0";
  }
});
inputPasswordAgain.addEventListener("keyup", () => {
  checkPasswordAgain.style.opacity = "1";
  if (inputPassword.value === inputPasswordAgain.value) {
    checkPasswordAgain.style.opacity = "0";
  }
});

registerConfirmButton.addEventListener("click", () => {
  if (
    inputUsername.value.length == 0 ||
    inputEmail.value.length == 0 ||
    inputPassword.value.length == 0 ||
    inputPasswordAgain.value.length == 0
  ) {
    alert("Please,fill the all gap.");
    return;
  }
  if (inputPassword.value.length == inputPasswordAgain.value.length) {
    alert("Please,write correct passwords.");
  }
});
