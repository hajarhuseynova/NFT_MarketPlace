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
let validateEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputUsername.addEventListener("keyup", () => {
  checkUsername.style.opacity = "1";
  if (inputUsername.value.length >= 3) {
    checkUsername.style.opacity = "0";
  }
});
inputEmail.addEventListener("keyup", () => {
  checkEmail.style.opacity = "1";
  if (validateEmailRegex.test(inputEmail.value)) {
    checkEmail.style.opacity = "0";
  }
});
inputPassword.addEventListener("keyup", () => {
  checkPassword.style.opacity = "1";
  if (inputPassword.value.length > 8) {
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
  checkUsername.style.opacity = "1";
  checkPasswordAgain.style.opacity = "1";
  checkPassword.style.opacity = "1";
  checkEmail.style.opacity = "1";
  if (
    inputUsername.value.length >= 3 &&
    validateEmailRegex.test(inputEmail.value) &&
    inputPassword.value == inputPasswordAgain.value &&
    inputPasswordAgain.value.length > 8
  ) {
    alert("Successfully!");
    inputEmail.value = "";
    inputUsername.value = "";
    inputPassword.value = "";
    inputPasswordAgain.value = "";
  } else {
    alert("Something wrong,please again.");
  }
});
