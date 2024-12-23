let loader;

function loadingFunc() {
  loader = setTimeout(showPage, 2300);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".container").style.display = "block";
}

let currentPage = document.querySelector(".currentPage");

currentPage.innerHTML = localStorage.getItem("Chosen")