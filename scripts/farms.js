let loader;

function loadingFunc() {
  loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".container").style.display = "block";
}