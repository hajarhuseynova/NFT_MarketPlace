const hamburgerMenu = document.getElementById("hamburgerMenu");
const registerButton = document.getElementById("registerButton");
const sidebar = document.querySelector(".sidebar");
const navbarLeft = document.querySelector(".navbar_left");
const rankingButton = document.querySelector("#rankingButton");
const seeAllButton = document.querySelector("#seeAllButton");
const creatorCard=document.querySelectorAll(".creator_card")
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});
registerButton.addEventListener("click", () => {
  window.location.href = "./register.html";
});
navbarLeft.addEventListener("click", () => {
  window.location.href = "./index.html";
});
rankingButton.addEventListener("click", () => {
  window.location.href = "./rankings.html";
});
seeAllButton.addEventListener("click", () => {
  window.location.href = "./marketplace.html";
});
creatorCard.forEach(element => {
  element.addEventListener("click",()=>{
    window.location.href = "./artist.html";
  });
});
