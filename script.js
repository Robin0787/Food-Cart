// All Elements
const addToCartButtons = document.getElementsByClassName("addToCart");
const tableBody = document.getElementById("tableBody");
let theTotal = document.getElementById("theTotal");

// Variables for calculation
let number = 0;
let allTotal = 0;

// Event Listener
document.getElementById("tableFooter").style.visibility = "hidden";
for (const btn of addToCartButtons) {
  btn.addEventListener("click", function () {
    UpdateTableOfProducts(this);
    if (this.parentNode.parentNode) {
    }
  });
}


function UpdateTableOfProducts(self) {
  document.getElementById("tableFooter").style.visibility = "visible";
  const theCard = self.parentNode.parentNode;
  const name = theCard.querySelector("#name");
  const price = theCard.querySelector("#price");
  const quantity = theCard.querySelector("#piece");
  let total = parseFloat(price.innerText) * parseFloat(quantity.value);
  number++;
  allTotal += total;
  theTotal.innerText = allTotal;
  tableBody.innerHTML += `
        <tr>
            <td>${number}</td>
            <td>${name.innerText}</td>
            <td>${price.innerText}</td>
            <td>${quantity.value}</td>
            <td>${total}</td>
        </tr>
    `;
}
