let xp = 0;
let healthPoints = 100;
let gold = 0;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory;

const rpgClassName = localStorage.getItem("rpgClass");
let rpgRaceName = localStorage.getItem("rpgRace");
let next = document.querySelector("#next");

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
function panelButtonWidthOpacityToZero() {
  document.getElementById("leftPanelWidth").style.width = "0px";
  document.getElementById("leftPanelWidth").style.opacity = "0";
  document.getElementById("rightPanelWidth").style.width = "0px";
  document.getElementById("rightPanelWidth").style.opacity = "0";
}
function panelButtonWidthOpacityToOneH() {
  document.getElementById("leftPanelWidth").style.opacity = "100";
  document.getElementById("rightPanelWidth").style.opacity = "100";
  document.getElementById("leftPanelWidth").style.width = "100px";
  document.getElementById("rightPanelWidth").style.width = "100px";
}

function openLeftPanel() {
  document.getElementById("leftSidePanel").style.width = "300px";
  document.getElementById("sidepanelOpacity").style.opacity = "100";
  document.getElementById("closeSidePanel").style.opacity = "100";
  panelButtonWidthOpacityToZero();
}
function closeLeftPanel() {
  document.getElementById("leftSidePanel").style.width = "0px";
  document.getElementById("sidepanelOpacity").style.opacity = "0";
  document.getElementById("closeSidePanel").style.opacity = "0";
  panelButtonWidthOpacityToOneH();
}
function openRightPanel() {
  document.getElementById("rightSidePanel").style.width = "300px";
  document.getElementById("rightSidePanel").style.opacity = "100";
  document.getElementById("closeRightPanel").style.opacity = "100";
  panelButtonWidthOpacityToZero();
}
function closeRightPanel() {
  document.getElementById("rightSidePanel").style.width = "0px";
  document.getElementById("rightSidePanel").style.opacity = "0";
  document.getElementById("closeRightPanel").style.opacity = "0";
  panelButtonWidthOpacityToOneH();
}
