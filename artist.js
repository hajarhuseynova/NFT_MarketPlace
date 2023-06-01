const registerButtonSidebarArtist = document.getElementById(
  "registerButtonSidebar"
);
registerButtonSidebarArtist.addEventListener("click", () => {
  window.location.href = "./register.html";
});
const inputFooterArtist = document.getElementById("inputFooter");
const buttonFooterArtist = document.getElementById("buttonFooter");
const emailRegexArtist = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const toastContainerArtist = document.querySelector(".toastContainer");
buttonFooterArtist.addEventListener("click", () => {
  const emailFooter = inputFooterArtist.value;
  if (correctEmailStructure(emailFooter)) {
    toastMessage("Successfully!");
  } else {
    toastMessage("Invalid Email!");
  }
});
function correctEmailStructure(emailFooter) {
  return emailRegexArtist.test(emailFooter);
}
function toastMessage(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  toastContainerArtist.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = 1;
  }, 100);
  setTimeout(function () {
    toast.style.opacity = 0;
    setTimeout(function () {
      toastContainerArtist.removeChild(toast);
    }, 300);
  }, 2000);
}
