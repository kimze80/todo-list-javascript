let form = document.querySelector("#form");
let input = document.querySelector("#input");
let myList = document.querySelector("#myList");

form.addEventListener("submit", e => {
  e.preventDefault();
  createItem(input.value);
});

function createItem(params) {
  let item = `<li>${params} <button onclick="deleteItem(this)">delete</button></li>`;
  myList.insertAdjacentHTML("beforeEnd", item);
  input.value = "";
  input.focus();
}

function deleteItem(itemDelete) {
  itemDelete.parentElement.remove();
}
