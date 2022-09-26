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
let condition;

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML === "") {
    element.innerHTML = "X";
    localStorage.setItem(id, turn);
    winner();
    turn = "O";
  } else if (turn === "O" && element.innerHTML === "") {
    element.innerHTML = "O";
    localStorage.setItem(id, turn);
    winner();
    turn = "X";
  }
}

function winner() {
  let a = localStorage.getItem("0");
  let b = localStorage.getItem("1");
  let c = localStorage.getItem("2");
  let d = localStorage.getItem("3");
  let e = localStorage.getItem("4");
  let f = localStorage.getItem("5");
  let g = localStorage.getItem("6");
  let h = localStorage.getItem("7");
  let i = localStorage.getItem("8");

  if (
    (a == "X" && b == "X" && c == "X") ||
    (a == "X" && d == "X" && g == "X") ||
    (a == "X" && e == "X" && i == "X") ||
    (b == "X" && e == "X" && h == "X") ||
    (c == "X" && f == "X" && i == "X") ||
    (c == "X" && e == "X" && g == "X") ||
    (d == "X" && e == "X" && f == "X") ||
    (g == "X" && h == "X" && i == "X")
  ) {
    alert("X is winner");
  } else if (
    (a == "O" && b == "O" && c == "O") ||
    (a == "O" && d == "O" && g == "O") ||
    (a == "O" && e == "O" && i == "O") ||
    (b == "O" && e == "O" && h == "O") ||
    (c == "O" && f == "O" && i == "O") ||
    (c == "O" && e == "O" && g == "O") ||
    (d == "O" && e == "O" && f == "O") ||
    (g == "O" && h == "O" && i == "O")
  ) {
    alert("O is winner");
  }
}

// function disable(){

//   if (winner) {
//     // document.getElementsByClassName("cell").style.cursor = "none";
//     console.log("Hello");
//   }
// }
