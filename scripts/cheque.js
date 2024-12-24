let loader;

const item = document.querySelector(".item");
const price = document.querySelector(".price");
const overall = document.querySelector(".overall");

function loadingFunc() {
  loader = setTimeout(showPage, 2300);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".container").style.display = "flex";
}

item.innerHTML += localStorage.getItem("Purchasing");
price.innerHTML += localStorage.getItem("Price");
overall.innerHTML += localStorage.getItem("Price")