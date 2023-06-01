const inputFooter = document.getElementById("inputFooter");
const buttonFooter = document.getElementById("buttonFooter");
const toastContainer = document.querySelector(".toastContainer");

buttonFooter.addEventListener("click", () => {
  const emailFooter = inputFooter.value;
  if (correctEmailStructure(emailFooter)) {
    toastMessage("Successfully!");
  } else {
    toastMessage("Invalid Email!");
  }
});
function correctEmailStructure(emailFooter) {
  return emailRegex.test(emailFooter);
}
function toastMessage(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
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
