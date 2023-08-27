// Race variables

const human = document.querySelector("#human");
const elf = document.querySelector("#elf");
const dwarf = document.querySelector("#dwarf");
const giant = document.querySelector("#giant");
const orc = document.querySelector("#orc");
const beastkin = document.querySelector("#beastkin");
const mutant = document.querySelector("#mutant");

// buttons

human.onclick = humanRace;
elf.onclick = elfRace;
dwarf.onclick = dwarfRace;
giant.onclick = giantRace;
orc.onclick = orcRace;
beastkin.onclick = beastRace;
mutant.onclick = mutantRace;

// Functions

function humanRace() {
  rpgRace = "human";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("human");
}
function elfRace() {
  rpgRace = "elf";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("elf");
}
function dwarfRace() {
  rpgRace = "dwarf";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("dwarf");
}
function giantRace() {
  rpgRace = "giant";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("giant");
}
function orcRace() {
  rpgRace = "orc";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("orc");
}
function beastRace() {
  rpgRace = "beastkin";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("beast");
}
function mutantRace() {
  rpgRace = "mutant";
  const rpgClassValue = rpgRace;
  localStorage.setItem("rpgRace", rpgClassValue);
  console.log("beast");
}
