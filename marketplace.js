const inputSearch = document.getElementById("inputSearch");
const cardsContainer = document.querySelector(".cards_container");
const cards = document.querySelectorAll(".card");
const heartWhite = document.querySelectorAll(".heartWhite");
const heartRed = document.querySelectorAll(".heartRed");
const collectionButton = document.getElementById("collectionButton");
const favouriteButton = document.getElementById("favouriteButton");
const main = document.getElementById("main");
const fav = document.getElementById("fav");
const favCount = document.getElementById("favCount");

const likedCards = JSON.parse(localStorage.getItem("cards")) || [];
let count = likedCards.length;
favCount.textContent = count;

// const likedCards = [];
console.log(likedCards);
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
  for (let j = 0; j < likedCards.length; j++) {
    if (i + 1 == likedCards[j]) {
      heartWhite[i].style.display = "none";
      heartRed[i].style.display = "block";
    }
  }
  heartWhite[i].addEventListener("click", () => {
    heartWhite[i].style.display = "none";
    heartRed[i].style.display = "block";
    count++;
    favCount.textContent = count;
    likedCards.push(i + 1);
    localStorage.setItem("cards", JSON.stringify(likedCards));
  
  });
  heartRed[i].addEventListener("click", () => {
    heartWhite[i].style.display = "block";
    heartRed[i].style.display = "none";
    count--;
    favCount.textContent = count;
    let index = likedCards.findIndex((id) => id === i + 1);
    likedCards.splice(index, 1);
    localStorage.setItem("cards", JSON.stringify(likedCards));
   
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
      const heart = cards[i].querySelector(".heartRed");
      heart.addEventListener("click", () => {
        cards[i].style.display = "none";
      });
    } else {
      cards[i].style.display = "none";
    }
  }
});
