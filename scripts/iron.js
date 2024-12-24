let loader;
let backBtn = document.querySelector(".back-btn");

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
