const createButton = document.getElementById("createButton");
const create = document.getElementById("create");
const ownedButton = document.getElementById("ownedButton");
const owned = document.getElementById("owned");
const collectionButton = document.getElementById("collectionButton");
const collection = document.getElementById("collection");
function resetBorder() {
  createButton.classList.remove("border");
  ownedButton.classList.remove("border");
  collectionButton.classList.remove("border");
}
function resetText() {
  collection.classList.add("label_text");
  owned.classList.add("label_text");
  create.classList.add("label_text");
}
createButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  createButton.classList.add("border");
  create.classList.remove("label_text");
});
ownedButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  ownedButton.classList.add("border");
  owned.classList.remove("label_text");
});
collectionButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  collectionButton.classList.add("border");
  collection.classList.remove("label_text");
});
owned.classList.add("label_text");
collection.classList.add("label_text");


