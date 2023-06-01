
const registerButton = document.getElementById("registerButton");
const rankingButton = document.querySelector("#rankingButton");
const seeAllButton = document.querySelector("#seeAllButton");
const creatorCard = document.querySelectorAll(".creator_card");
const creatorCardMedia = document.querySelectorAll(".creator_card_media");
const registerPageImage = document.getElementById("registerPageImage");
registerPageImage.addEventListener("click", () => {
  window.location.href = "./register.html";
});
registerButton.addEventListener("click", () => {
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

const emailInput = document.querySelector(".inputs>input");
const toastContainerIndex = document.querySelector(".toastContainer");
const buttonToast = document.querySelector(".inputs>button");
const emailRegexIndex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
buttonToast.addEventListener("click", () => {
  const email = emailInput.value;
  if (correctEmailStructure(email)) {
    toastMessage("Successfully!");
  } else {
    toastMessage("Invalid Email!");
  }
});
function correctEmailStructure(email) {
  return emailRegexIndex.test(email);
}
function toastMessage(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  toastContainerIndex.appendChild(toast);
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

