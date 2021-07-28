let button = document.getElementById("button");
let colorDiv = document.getElementById("random-color-box");
let tableDiv = document.getElementById("table");

const generateRandomNumber = (maxNum) => {
  return Math.floor(maxNum * Math.random());
};

const generateRandomColor = () => {
  return [
    generateRandomNumber(256),
    generateRandomNumber(256),
    generateRandomNumber(256),
  ];
};

button.addEventListener("click", () => {
  tableDiv.innerText = "";
  const [r, g, b] = generateRandomColor();

  colorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  colorDiv.classList.add("random");

  let table = document.createElement("table");
  tableDiv.appendChild(table);

  let thead = document.createElement("thead");
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  let tro = document.createElement("tr");
  thead.appendChild(tro);

  let tho = document.createElement("th");
  tho.textContent = "Red: ";
  tro.appendChild(tho);

  let thtw = document.createElement("th");
  thtw.textContent = "Green: ";
  tro.appendChild(thtw);

  let thth = document.createElement("th");
  thth.textContent = "Blue: ";
  tro.appendChild(thth);

  let trt = document.createElement("tr");
  tbody.appendChild(trt);

  let tdo = document.createElement("td");
  tdo.textContent = r;
  trt.appendChild(tdo);

  let tdtw = document.createElement("td");
  tdtw.textContent = g;
  trt.appendChild(tdtw);

  let tdth = document.createElement("td");
  tdth.textContent = b;
  trt.appendChild(tdth);

  table.classList.add("table");
});
