// loading animation
let loader;

function loadingFunc() {
  loader = setTimeout(showPage, 2700);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".container").style.display = "block";
}

// list of cards
const iron = document.querySelector(".iron");
const gold = document.querySelector(".gold");
const spruce = document.querySelector(".spruce");
const enderman = document.querySelector(".enderman");
const cobblestone = document.querySelector(".cobblestone");
const gunpowder = document.querySelector(".gunpowder");
const cane = document.querySelector(".cane");
const basalt = document.querySelector(".basalt");

// handling clicks
iron.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Железо");
  window.location.href = "../routes/farms/iron.html";
})
gold.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Золото");
  window.location.href = "../routes/farms/gold.html";
})
spruce.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Дерево");
  window.location.href = "../routes/farms/spruce.html";
})
enderman.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Эндермен");
  window.location.href = "../routes/farms/enderman.html";
})
cobblestone.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Булыжник");
  window.location.href = "../routes/farms/cobblestone.html";
})
gunpowder.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Порох");
  window.location.href = "../routes/farms/gunpowder.html";
})
cane.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Сахорный Тросник");
  window.location.href = "../routes/farms/cane.html";
})
basalt.addEventListener('click', function(){
  localStorage.setItem("Chosen", "Базальт");
  window.location.href = "../routes/farms/basalt.html";
})