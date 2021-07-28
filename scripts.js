let startNumberEl = document.getElementById("start");
const incrementEl = document.getElementById("incre");
let countEl = document.getElementById("count");

const input = document.getElementById("input");

const generate = document.getElementById("generate");
const startNumberElConsole = console.log(startNumberEl);
const incrementElConsole = console.log(incrementEl);
const countElConsole = console.log(countEl);
const result = document.getElementById("result");

let startNumber = parseFloat(startNumberEl.value);
let count = parseFloat(countEl.value);
let increment = parseFloat(incrementEl.value);

generate.addEventListener("click", () => {
  /*
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>101</td>
        </tr>
        ...
      </tbody>
    </table>  

*/

  result.innerText = "";
  const table = document.createElement("table");
  result.appendChild(table);
  const thead = document.createElement("thead");
  table.appendChild(thead);
  const tr = document.createElement("tr");
  thead.appendChild(tr);
  const tho = document.createElement("th");
  tho.textContent = "Count";
  tr.appendChild(tho);
  const tht = document.createElement("th");
  tr.appendChild(tht);
  tht.textContent = "Number";

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  table.classList.add("bordered-table");

  const count = parseInt(countEl.value, 10);
  const increment = parseInt(incrementEl.value, 10);
  const startAt = parseInt(startNumberEl.value, 10);

  for (let i = 0; i < count; i++) {
    const tr2 = document.createElement("tr");
    tbody.appendChild(tr2);

    const tdCount = document.createElement("td");
    tdCount.textContent = i + 1;
    tr2.appendChild(tdCount);

    const tdNumber = document.createElement("td");
    tdNumber.textContent = startAt + increment * i;
    tr2.appendChild(tdNumber);
  }
});
