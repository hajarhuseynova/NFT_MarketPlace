const inputSearch = document.getElementById("inputSearch");
const cardsContainer = document.querySelector(".cards_container");

const favoritedCards = [];

const cards = document.querySelectorAll(".card");
const heartWhite = document.querySelectorAll(".heartWhite");
const heartRed = document.querySelectorAll(".heartRed");
const collectionButton = document.getElementById("collectionButton");
const favouriteButton = document.getElementById("favouriteButton");
const main = document.getElementById("main");
const fav = document.getElementById("fav");
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

collectionButton.addEventListener("click", () => {
  favouriteButton.classList.remove("borderChoice");
  collectionButton.classList.add("borderChoice");
  main.classList.remove("muted");
  fav.classList.add("muted");

  for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
  }
});
favouriteButton.addEventListener("click", () => {
  collectionButton.classList.remove("borderChoice");
  favouriteButton.classList.add("borderChoice");
  main.classList.add("muted");
  fav.classList.remove("muted");
  for (let i = 0; i < heartWhite.length; i++) {
    if (heartRed[i].style.display == "block") {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
});
