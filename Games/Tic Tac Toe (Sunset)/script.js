// improve AI to be offensive too

var playerSign = "";
var compSign = "";
var grid = ["e","e","e", "e","e","e", "e","e","e"];
var turn = 0;
var isFinished = false;

var dark = document.querySelector("#dark");
var message = document.querySelector("#message");
var playX = document.querySelector("#playX");
var playO = document.querySelector("#playO");
var plays = document.querySelectorAll(".play");

playX.addEventListener("click", startGame);
playO.addEventListener("click", startGame);

// choose sign
function startGame(e) {
  // clearInterval(checkPageInterval);
  dark.classList.add("hidden");
  playerSign = e.target.getAttribute("data-sign");
  compSign = playerSign === "x" ? "o" : "x";
  if (playerSign === "o") {
    compMove();
  }
  for (var i=0; i<plays.length; i++) {
    plays[i].addEventListener("click", playerMove);
  }
}

// player move
function playerMove(e) {
  e.target.innerHTML = playerSign;
  e.target.classList.remove("playable");
  grid[e.target.id] = playerSign;
  turn++;
  checker("player");
  if (!isFinished) {
    setTimeout(function() {
      compMove();
    }, 500);
  }
  e.target.removeEventListener("click", playerMove);
}

// AI move
function compMove() {
  var logicMove = aiLogic();
  plays[logicMove].innerHTML = compSign;
  plays[logicMove].classList.remove("playable");
  plays[logicMove].removeEventListener("click", playerMove);
  grid[logicMove] = compSign;
  turn++;
  checker("comp");
}

// end game checker (win, lose, tie)
function checker(whoo) {
  console.log(grid, turn);
  // win
  if ( (whoo === "player") && (gridCheck(playerSign)) ) {
    isFinished = true;
    setTimeout(function() {
      reset("You win!");
    }, 500);
  }
  // lose
  else if ( (whoo === "comp") && (gridCheck(compSign)) ) {
    isFinished = true;
    setTimeout(function() {
      reset("You lose!");
    }, 500);
  }
  // tie
  // else if (!grid.includes("e")) {
  else if (turn === 9) {
    isFinished = true;
    setTimeout(function() {
      reset("You tie!");
    }, 500);
  }
}

// check grid
function gridCheck(sign) {
  return (
    (grid[0] === sign && grid[1] === sign && grid[2] === sign) ||
    (grid[3] === sign && grid[4] === sign && grid[5] === sign) ||
    (grid[6] === sign && grid[7] === sign && grid[8] === sign) ||
    (grid[0] === sign && grid[3] === sign && grid[6] === sign) ||
    (grid[1] === sign && grid[4] === sign && grid[7] === sign) ||
    (grid[2] === sign && grid[5] === sign && grid[8] === sign) ||
    (grid[0] === sign && grid[4] === sign && grid[8] === sign) ||
    (grid[2] === sign && grid[4] === sign && grid[6] === sign)
  );
}

// ai logic
function aiLogic() {
  // add offensive moves
  
  // defensive moves
  if (
    grid[0] === "e" && (
      (grid[1] === playerSign && grid[2] === playerSign) ||
      (grid[3] === playerSign && grid[6] === playerSign) ||
      (grid[4] === playerSign && grid[8] === playerSign)
  )) { return 0 }
  
  else if (
    grid[1] === "e" && (
      (grid[0] === playerSign && grid[2] === playerSign) ||
      (grid[4] === playerSign && grid[7] === playerSign)
  )) { return 1 }
  
  else if (
    grid[2] === "e" && (
      (grid[0] === playerSign && grid[1] === playerSign) ||
      (grid[4] === playerSign && grid[6] === playerSign) ||
      (grid[5] === playerSign && grid[8] === playerSign)
  )) { return 2 }
  
  else if (
    grid[3] === "e" && (
    (grid[0] === playerSign && grid[6] === playerSign) ||
      (grid[4] === playerSign && grid[5] === playerSign)
  )) { return 3 }
  
  else if (
    grid[4] === "e" && (
    (grid[0] === playerSign && grid[8] === playerSign) ||
      (grid[1] === playerSign && grid[7] === playerSign) ||
      (grid[2] === playerSign && grid[6] === playerSign) ||
      (grid[3] === playerSign && grid[5] === playerSign)
  )) { return 4 }
  
  else if (
    grid[5] === "e" && (
    (grid[2] === playerSign && grid[8] === playerSign) ||
      (grid[3] === playerSign && grid[4] === playerSign)
  )) { return 5 }
  
  else if (
    grid[6] === "e" && (
    (grid[0] === playerSign && grid[3] === playerSign) ||
      (grid[2] === playerSign && grid[4] === playerSign) ||
      (grid[7] === playerSign && grid[8] === playerSign)
  )) { return 6 }
  
  else if (
    grid[7] === "e" && (
    (grid[1] === playerSign && grid[4] === playerSign) ||
      (grid[6] === playerSign && grid[8] === playerSign)
  )) { return 7 }
  
  else if (
    grid[8] === "e" && (
    (grid[0] === playerSign && grid[4] === playerSign) ||
      (grid[2] === playerSign && grid[5] === playerSign) ||
      (grid[6] === playerSign && grid[7] === playerSign)
  )) { return 8 }
  
  // random move
  else { return rand(grid.length) }
  
}

// reset func
function reset(msg) {
  playX.classList.add("hidden");
  playO.classList.add("hidden");
  message.textContent = msg;
  message.classList.remove("hidden");
  dark.classList.remove("hidden");
  grid = ["e","e","e", "e","e","e", "e","e","e"];
  turn = 0;
  isFinished = false;
  for (var j=0; j<plays.length; j++) {
    plays[j].innerHTML = "";
    plays[j].classList.add("playable");
    plays[j].removeEventListener("click", playerMove);
  }
  setTimeout(function() {
    playX.classList.remove("hidden");
    playO.classList.remove("hidden");
    message.classList.add("hidden");
  }, 1500);
}

// random func
function rand(num) {
  var randd = Math.floor(Math.random() * num);
  while (grid[randd] !== "e") {
    randd = Math.floor(Math.random() * num);
  }
  return randd; 
}

// handle focus of the page
// function checkPageFocus() {
//   if (document.hasFocus()) {
//     dark.classList.remove("hidden");
//   }
//   else {
//     dark.classList.add("hidden");
//   }
// }
// var checkPageInterval = setInterval(checkPageFocus, 300);
