let dataBase = [];
const get = (e) => document.querySelector(`input[name='${e}']`).value;
const form = document.getElementById("form");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let customer_name = get("customer_name");
  let product = get("product_name");
  let quantity = parseInt(get("quantity")) || 0;
  let price = parseFloat(get("price")) || 0;
  let total = quantity * price;
  let paid = document.querySelector("input[name='paid']").checked;

  let entry = {
    customer_name,
    product,
    quantity,
    price,
    total,
    paid,
    date: new Date().toLocaleString(),
  };

  dataBase.push(entry);

  // Add only the new row, not all
  let tr = document.createElement("tr");
  Object.values(entry).forEach((value) => {
    let td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);

  // Optional: save to localStorage
  localStorage.setItem("dataBase", JSON.stringify(dataBase));

  form.reset();
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
        if (window.StatusBar) {
          StatusBar.hide();
        }
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);

  // Load stored data if any
  let stored = localStorage.getItem("dataBase");
  if (stored) {
    dataBase = JSON.parse(stored);
    dataBase.forEach((entry) => {
      let tr = document.createElement("tr");
      Object.values(entry).forEach((value) => {
        let td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }
}
