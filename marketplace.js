const inputSearch = document.getElementById("inputSearch");
const cardsContainer = document.querySelector(".cards_container");
inputSearch.addEventListener("input", () => {
  const searchValue = inputSearch.value.trim().toLowerCase();
  const cardsArr = [...cardsContainer.children];
  cardsArr.forEach((card) => {
    const title = card
      .querySelector("h5")
      .textContent.trim()
      .toLocaleLowerCase();
    const text = card.querySelector("p").textContent.trim().toLocaleLowerCase();
    if (title.includes(searchValue) || text.includes(searchValue)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
});
const heartWhite = document.querySelectorAll(".heartWhite");
const heartRed = document.querySelectorAll(".heartRed");
const collectionButton = document.getElementById("collectionButton");
const favouriteButton = document.getElementById("favouriteButton");
const main = document.getElementById("main");
const fav = document.getElementById("fav");
registerButtonSidebar.addEventListener("click", () => {
  window.location.href = "./register.html";
});

for (let i = 0; i < heartWhite.length; i++) {
  heartWhite[i].addEventListener("click", () => {
    heartWhite[i].style.display = "none";
    heartRed[i].style.display = "block";
  });
  heartRed[i].addEventListener("click", () => {
    heartWhite[i].style.display = "block";
    heartRed[i].style.display = "none";
  });
}
const cardsArr = [...cardsContainer.children];
collectionButton.addEventListener("click", () => {
  favouriteButton.classList.remove("borderChoice");
  collectionButton.classList.add("borderChoice");
  main.classList.remove("muted");
  fav.classList.add("muted");

  for (let i = 0; i < cardsArr.length; i++) {
    if ((heartWhite[i].style.display = "block")) {
      cardsContainer.children[i].display = "flex";
    } else {
      cardsContainer.children[i].display = "none";
    }
  }
});
favouriteButton.addEventListener("click", () => {
  collectionButton.classList.remove("borderChoice");
  favouriteButton.classList.add("borderChoice");
  main.classList.add("muted");
  fav.classList.remove("muted");
  for (let i = 0; i < cardsArr.length; i++) {
    if ((heartRed[i].style.display = "block")) {
      cardsArr[i].display = "flex";
    }
  }
});
document.body.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});

const inputFooterMarket = document.getElementById("inputFooter");
const buttonFooterMarket = document.getElementById("buttonFooter");
const emailRegexMarket = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const toastContainerMarket = document.querySelector(".toastContainer");
buttonFooterMarket.addEventListener("click", () => {
  const emailFooter = inputFooterMarket.value;
  if (correctEmailStructure(emailFooter)) {
    toastMessage("Successfully!");
  } else {
    toastMessage("Invalid Email!");
  }
});
function correctEmailStructure(emailFooter) {
  return emailRegexMarket.test(emailFooter);
}
function toastMessage(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  toastContainerMarket.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = 1;
  }, 100);
  setTimeout(function () {
    toast.style.opacity = 0;
    setTimeout(function () {
      toastContainerMarket.removeChild(toast);
    }, 300);
  }, 2000);
}
