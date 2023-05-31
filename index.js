const hamburgerMenu = document.getElementById("hamburgerMenu");
const registerButton = document.getElementById("registerButton");
const sidebar = document.querySelector(".sidebar");
const navbarLeft = document.querySelector(".navbar_left");
const rankingButton = document.querySelector("#rankingButton");
const seeAllButton = document.querySelector("#seeAllButton");
const creatorCard = document.querySelectorAll(".creator_card");
const creatorCardMedia = document.querySelectorAll(".creator_card_media");
const sidebarButton = document.getElementById("sidebarButton");
const deleteImage = document.getElementById("deleteImage");
const registerPageImage = document.getElementById("registerPageImage");
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.add("visible");
});
deleteImage.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});
registerPageImage.addEventListener("click", () => {
  window.location.href = "./register.html";
});
registerButton.addEventListener("click", () => {
  window.location.href = "./register.html";
});
navbarLeft.addEventListener("click", () => {
  window.location.href = "./index.html";
});
creatorCard.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "./artist.html";
  });
});
creatorCardMedia.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "./artist.html";
  });
});

const emailInput = document.querySelector(".email_input");
const toast = document.querySelector(".toast");
const buttonToast = document.getElementById("buttonToast");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

buttonToast.addEventListener("click", () => {
  const email = emailInput.value;
  if (correctEmailStructure(email)) {
    toastMessage("Successfully!");
  } else {
    toastMessage("Invalid Email!");
  }
});

function correctEmailStructure(email) {
  return emailRegex.test(email);
}
function toastMessage(message) {
  toast.innerText = message;
  toast.style.opacity = "1";
  setTimeout(function () {
    toast.style.opacity = "0";
  }, 5000);
}
