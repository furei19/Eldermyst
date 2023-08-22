// Class variables

const knight = document.querySelector("#knight");
const ranger = document.querySelector("#ranger");
const mage = document.querySelector("#mage");
const paladin = document.querySelector("#paladin");
const berserker = document.querySelector("#berserker");
const druid = document.querySelector("#druid");
const alchemist = document.querySelector("#alchemist");

// Buttons

knight.onclick = knightClass;
ranger.onclick = rangerClass;
mage.onclick = mageClass;
paladin.onclick = paladinClass;
berserker.onclick = berserkerClass;
druid.onclick = druidClass;
alchemist.onclick = alchemistClass;

// Functions

function knightClass() {
  rpgClass = "knight";
  console.log("");
}
function rangerClass() {
  rpgClass = "ranger";
  console.log("");
}
function mageClass() {
  rpgClass = "mage";
  console.log("");
}
function paladinClass() {
  rpgClass = "paladin";
  console.log("");
}
function berserkerClass() {
  rpgClass = "berserker";
  console.log("");
}
function druidClass() {
  rpgClass = "druid";
  console.log("");
}
function alchemistClass() {
  rpgClass = "alchemist";
  console.log("");
}
