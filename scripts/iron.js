let loader;
let backBtn = document.querySelector(".back-btn");
let productName = document.querySelector(".product-name");
let purchaseButton = document.querySelector(".product-purchase-button");

function loadingFunc() {
  loader = setTimeout(showPage, 2300);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".container").style.display = "block";
}

let currentPage = document.querySelector(".currentPage");
currentPage.innerHTML = localStorage.getItem("Chosen");

backBtn.addEventListener("click", function () {
  window.location.href = "../../index.html";
});

productName.innerHTML += localStorage.getItem("Chosen");

purchaseButton.addEventListener("click", function(){
  localStorage.setItem("Purchasing", `Ферма ${localStorage.getItem("Chosen")}`);
  localStorage.setItem("Price", "15.000 UZS");
  window.location.href = "../cheque.html"
})