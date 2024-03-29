const hamburgerMenu = document.getElementById("hamburgerMenu");
const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.getElementById("sidebarButton");
const deleteImage = document.getElementById("deleteImage");
const navbarLeft = document.querySelector(".navbar_left");
const registerButtonSidebar = document.getElementById("registerButtonSidebar");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const registerButton = document.getElementById("registerButton");
const sidebarRegisterButton = document.querySelector(".lastimage");
registerButton.addEventListener("click", () => {
  window.location.href = "./register.html";
});
sidebarRegisterButton.addEventListener("click", () => {
  window.location.href = "./register.html";
});
document.body.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});
hamburgerMenu.addEventListener("click", (e) => {
  sidebar.classList.add("visible");
  e.stopPropagation();
});
deleteImage.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});
navbarLeft.addEventListener("click", () => {
  window.location.href = "./index.html";
});
registerButtonSidebar.addEventListener("click", () => {
  window.location.href = "./register.html";
});
