const farmCard = document.querySelector(".farms");
const buildingCard = document.querySelector(".buildings");

let loader;


farmCard.addEventListener("click", function () {
  window.location.href = "./routes/farms.html";
});

function loadingFunc() {
  loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".container").style.display = "flex";
}
