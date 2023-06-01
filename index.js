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
hamburgerMenu.addEventListener("click", (e) => {
  sidebar.classList.add("visible");
  e.stopPropagation();
});
deleteImage.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
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
rankingButton.addEventListener("click", () => {
  window.location.href = "./rankings.html";
});
seeAllButton.addEventListener("click", () => {
  window.location.href = "./marketplace.html";
});
const registerButtonSidebar = document.getElementById("registerButtonSidebar");
registerButtonSidebar.addEventListener("click", () => {
  window.location.href = "./register.html";
});
const emailInput = document.querySelector(".inputs>input");
const toastContainer = document.querySelector(".toastContainer");
const buttonToast = document.querySelector(".inputs>button");

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
const inputFooter = document.getElementById("inputFooter");
const buttonFooter = document.getElementById("buttonFooter");
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
document.body.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});
