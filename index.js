const hamburgerMenu = document.getElementById("hamburgerMenu");
const sidebar = document.querySelector(".sidebar");
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});
