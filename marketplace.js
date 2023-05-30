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
