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
const table = document.querySelector(".cards table");
const tbody = document.querySelector("tbody");
const rows = Array.from(tbody.getElementsByTagName("tr"));
const first_th = document.getElementById("first_th");
const second_th = document.getElementById("second_th");
const third_th = document.getElementById("third_th");
const fourth_th = document.getElementById("fourth_th");
const fifth_th = document.getElementById("fifth_th");

let data = rows.map((row) => {
  const columns = row.getElementsByTagName("td");
  return {
    "#": Number(columns[0].querySelector("div span").textContent.trim()),
    Artist: columns[1].querySelector("h5").textContent.trim(),
    Change: columns[2].textContent.trim(),
    "NFTs Sold": Number(columns[3].textContent.trim()),
    Volume: columns[4].textContent.trim(),
    ImageSrc: columns[1].querySelector("img").src,
  };
});

const renderTable = () => {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((row) => {
    const newRow = document.createElement("tr");
    const numberCell = document.createElement("td");
    const numberDiv = document.createElement("div");
    //new
    const numberSpan = document.createElement("span");
    numberSpan.textContent = row["#"];
    if (numberSpan.textContent > 9) {
      numberSpan.classList.add("high");
    }
    numberDiv.appendChild(numberSpan);
    numberCell.appendChild(numberDiv);
    newRow.appendChild(numberCell);

    const artistCell = document.createElement("td");
    const artistImg = document.createElement("img");
    artistImg.src = row["ImageSrc"];

    const artistName = document.createElement("h5");
    artistName.textContent = row["Artist"];
    artistCell.appendChild(artistImg);
    artistCell.appendChild(artistName);
    newRow.appendChild(artistCell);

    const changeCell = document.createElement("td");
    changeCell.textContent = row["Change"];
    newRow.appendChild(changeCell);

    const nftsSoldCell = document.createElement("td");
    nftsSoldCell.textContent = row["NFTs Sold"];
    newRow.appendChild(nftsSoldCell);

    const volumeCell = document.createElement("td");
    volumeCell.textContent = row["Volume"];
    newRow.appendChild(volumeCell);

    tbody.append(newRow);
  });
};

let lowToHigh1 = false;
let lowToHigh2 = false;
let lowToHigh3 = false;
let lowToHigh4 = false;
let lowToHigh5 = false;
first_th.addEventListener("click", () => {
  data.reverse();
  if (!lowToHigh1) {
    lowToHigh1 = true;
  } else {
    data.sort((a, b) => a["#"] - b["#"]);
    lowToHigh1 = false;
  }
  renderTable();
});
second_th.addEventListener("click", () => {
  data.sort((a, b) => a["Artist"].localeCompare(b["Artist"]));
  if (!lowToHigh2) {
    lowToHigh2 = true;
  } else {
    data.reverse();
    lowToHigh2 = false;
  }
  renderTable();
});
third_th.addEventListener("click", () => {
  data.sort((a, b) => parseFloat(a["Change"]) - parseFloat(b["Change"]));
  if (!lowToHigh3) {
    lowToHigh3 = true;
  } else {
    data.reverse();
    lowToHigh3 = false;
  }
  renderTable();
});
fourth_th.addEventListener("click", () => {
  data.sort((a, b) => a["NFTs Sold"] - b["NFTs Sold"]);
  if (!lowToHigh4) {
    lowToHigh4 = true;
  } else {
    data.reverse();
    lowToHigh4 = false;
  }
  renderTable();
});
fifth_th.addEventListener("click", () => {
  data.sort((a, b) => parseFloat(a["Volume"]) - parseFloat(b["Volume"]));
  if (!lowToHigh5) {
    lowToHigh5 = true;
  } else {
    data.reverse();
    lowToHigh5 = false;
  }
  renderTable();
});
renderTable();
