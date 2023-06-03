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

inputUsername.addEventListener("blur", () => {
  if (inputUsername.value.length < 3) {
    checkUsername.style.opacity = "1";
  } else {
    checkUsername.style.opacity = "0";
  }
});
inputUsername.addEventListener("keyup", () => {
  if (inputUsername.value.length >= 3) {
    checkUsername.style.opacity = "0";
  }
});

inputEmail.addEventListener("blur", () => {
  if (!correctEmailStructure(inputEmail.value)) {
    checkEmail.style.opacity = "1";
  }
});
inputEmail.addEventListener("keyup", () => {
  if (correctEmailStructure(inputEmail.value)) {
    checkEmail.style.opacity = "0";
  }
});
inputPassword.addEventListener("blur", () => {
  if (inputPassword.value.length < 8) {
    checkPassword.style.opacity = "1";
  }
});
inputPassword.addEventListener("keyup", () => {
  if (inputPassword.value.length >= 8) {
    checkPassword.style.opacity = "0";
  }
});
inputPasswordAgain.addEventListener("blur", () => {
  if (
    inputPassword.value != inputPasswordAgain.value ||
    inputPasswordAgain.value.length < 8
  ) {
    checkPasswordAgain.style.opacity = "1";
  }
});
inputPasswordAgain.addEventListener("keyup", () => {
  if (inputPassword.value === inputPasswordAgain.value) {
    checkPasswordAgain.style.opacity = "0";
  }
});
registerConfirmButton.addEventListener("click", () => {
  if (
    inputUsername.value.length >= 3 &&
    correctEmailStructure(inputEmail.value) &&
    inputPassword.value == inputPasswordAgain.value &&
    inputPasswordAgain.value.length >= 8
  ) {
    toastConfirmMessage("Huhuu,Successfully Created!");
    inputEmail.value = "";
    inputUsername.value = "";
    inputPassword.value = "";
    inputPasswordAgain.value = "";
  } else {
    toastAlertMessage("OPS! Something Wrong!");
  }
});

function correctEmailStructure(emailFooter) {
  return emailRegex.test(emailFooter);
}
function toastConfirmMessage(Confirmmessage) {
  const toast = document.createElement("div");
  toast.classList.add("success");
  toast.innerText = Confirmmessage;
  toastContainer.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = 1;
  }, 100);
  setTimeout(function () {
    toast.style.opacity = 0;
    setTimeout(function () {
      toastContainer.removeChild(toast);
    }, 300);
  }, 2000);
}
function toastAlertMessage(Alertmessage) {
  const toast = document.createElement("div");
  toast.classList.add("alert");
  toast.innerText = Alertmessage;
  toastContainer.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = 1;
  }, 100);
  setTimeout(function () {
    toast.style.opacity = 0;
    setTimeout(function () {
      toastContainer.removeChild(toast);
    }, 300);
  }, 2000);
}
