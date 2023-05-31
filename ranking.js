const dayButton = document.getElementById("dayButton");
const weekButton = document.getElementById("weekButton");
const monthButton = document.getElementById("monthButton");
const allTimeButton = document.getElementById("allTimeButton");
dayButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  dayButton.classList.add("border");
  todayH.classList.remove("label_text");
  oneH.classList.remove("label_text");
});
weekButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  weekButton.classList.add("border");
  sevenH.classList.remove("label_text");
  weekH.classList.remove("label_text");
});
monthButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  monthButton.classList.add("border");
  monthH.classList.remove("label_text");
  thirtyH.classList.remove("label_text");
});
allTimeButton.addEventListener("click", () => {
  resetBorder();
  resetText();
  allTimeButton.classList.add("border");
  allH.classList.remove("label_text");
});
function resetBorder() {
  allTimeButton.classList.remove("border");
  monthButton.classList.remove("border");
  weekButton.classList.remove("border");
  dayButton.classList.remove("border");
}

function resetText() {
  todayH.classList.add("label_text");
  oneH.classList.add("label_text");
  sevenH.classList.add("label_text");
  weekH.classList.add("label_text");
  monthH.classList.add("label_text");
  thirtyH.classList.add("label_text");
  allH.classList.add("label_text");
}
sevenH.classList.add("label_text");
weekH.classList.add("label_text");
monthH.classList.add("label_text");
thirtyH.classList.add("label_text");
allH.classList.add("label_text");
