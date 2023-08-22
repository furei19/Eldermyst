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
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
function rangerClass() {
  rpgClass = "ranger";
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
function mageClass() {
  rpgClass = "mage";
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
function paladinClass() {
  rpgClass = "paladin";
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
function berserkerClass() {
  rpgClass = "berserker";
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
function druidClass() {
  rpgClass = "druid";
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
function alchemistClass() {
  rpgClass = "alchemist";
  const rpgClassValue = rpgClass;
  localStorage.setItem("rpgClass", rpgClassValue);
  console.log("");
}
