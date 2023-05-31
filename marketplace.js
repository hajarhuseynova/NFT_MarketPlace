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
