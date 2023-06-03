const rankingButton = document.querySelector("#rankingButton");
const seeAllButton = document.querySelector("#seeAllButton");
const creatorCard = document.querySelectorAll(".creator_card");
const creatorCardMedia = document.querySelectorAll(".creator_card_media");
const registerPageImage = document.getElementById("registerPageImage");
const emailInput = document.querySelector(".inputs>input");
const toastContainerIndex = document.querySelector(".toastContainer");
const buttonToast = document.querySelector(".inputs>button");

const emailRegexIndex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

registerPageImage.addEventListener("click", () => {
  window.location.href = "./register.html";
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

buttonToast.addEventListener("click", () => {
  const email = emailInput.value;
  if (correctEmailStructure(email)) {
    toastConfirmMessage("Huhuu,Correct!");
  } else {
    toastAlertMessage("OPS!  Invalid Email!");
  }
});
function correctEmailStructure(email) {
  return emailRegexIndex.test(email);
}
function toastConfirmMessage(Confirmmessage) {
  const toast = document.createElement("div");
  toast.classList.add("success");
  toast.innerHTML = `
  <img src="./assests/icons/toast_icons/confirm.svg" class="confirm_image">
  ${Confirmmessage}
  `;
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
  toast.innerHTML = `
  <img src="./assests/icons/toast_icons/alert.svg" class="alert_image">
  ${Alertmessage}
  `;
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
