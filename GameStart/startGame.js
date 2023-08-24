let xp = 0;
let healthPoints = 100;
let gold = 0;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory;

const rpgClassName = localStorage.getItem("rpgClass");
let rpgRaceName = localStorage.getItem("rpgRace");
let Element = document.getElementById("heading");
const next = document.querySelector("#next");

next.onclick = nextClick;

if (rpgRaceName === "human") {
  raceKingdom = "Avaloria";
  console.log("human");
} else if (rpgRaceName === "elf") {
  raceKingdom = "Elf Kingdom";
  console.log("elf");
} else if (rpgRaceName === "dwarf") {
  raceKingdom = "Dwarf Kingdom";
} else if (rpgRaceName === "giant") {
  raceKingdom = "Valerius";
} else if (rpgRaceName === "Orc") {
  raceKingdom = "Orc Kingdom";
} else if (rpgRaceName === "beastkin") {
  raceKingdom = "Beastkin Teritorries";
} else if (rpgRaceName === "mutant") {
  raceKingdom = "Mutant Teritorries";
}

function nextClick() {
  Element.innerHTML = raceKingdom;
}

console.log(rpgRaceName);
console.log(rpgClassName);
