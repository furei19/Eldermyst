let xp = 0;
let healthPoints = 100;
let gold = 0;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory;

const rpgClassName = localStorage.getItem("rpgClass");
let rpgRaceName = localStorage.getItem("rpgRace");
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
} else if (rpgRaceName === "orc") {
  raceKingdom = "Orc Kingdom";
} else if (rpgRaceName === "beastkin") {
  raceKingdom = "Beastkin Teritorries";
} else if (rpgRaceName === "mutant") {
  raceKingdom = "Mutant Teritorries";
}

function nextClick() {
  document.getElementById("heading").innerHTML = raceKingdom;
}
