const inputFooter = document.getElementById("inputFooter");
const buttonFooter = document.getElementById("buttonFooter");
const toastContainer = document.querySelector(".toastContainer");

buttonFooter.addEventListener("click", () => {
  const emailFooter = inputFooter.value;
  if (correctEmailStructure(emailFooter)) {
    toastConfirmMessage("Huhuu,Correct!");
  } else {
    toastAlertMessage("OPS!  Invalid Email!");
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
