const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

function namePlayers() {
  localStorage.setItem("player1", player1.value);
  localStorage.setItem("player2", player2.value);
}

document.getElementById("name1").innerText = localStorage.getItem("player1");
document.getElementById("name2").innerText = localStorage.getItem("player2");

function Reload() {
  location.reload(true);
  localStorage.clear();
}

let turn = "X";
let message = document.querySelector("#message");
let cells = document.querySelectorAll("[data-cell]");
message.innerText = "Winner is : " + turn;
