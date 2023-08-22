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
  let rpgClass = "knight";
  console.log("");
}
function rangerClass() {
  let rpgClass = "ranger";
  console.log("");
}
function mageClass() {
  let rpgClass = "mage";
  console.log("");
}
function paladinClass() {
  let rpgClass = "paladin";
  console.log("");
}
function berserkerClass() {
  let rpgClass = "berserker";
  console.log("");
}
function druidClass() {
  let rpgClass = "druid";
  console.log("");
}
function alchemistClass() {
  let rpgClass = "alchemist";
  console.log("");
}

export let rpgClass;
