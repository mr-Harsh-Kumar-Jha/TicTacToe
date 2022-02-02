console.log("Welcome to tic tac toe");

let gameOverAudio = new Audio("projectsound/gameover.mp3");
let turnAudio = new Audio("projectsound/ting.mp3");
let info = document.querySelector(".info");
let turn = "X";
let reset = document.getElementById("reset");
let gameover2 = "flase";
let gif = document.querySelector('.gif').querySelector('img');
// document.querySelector('.bro').classList.remove('line');
// document.querySelector('.bro').classList.toggle('.line');
// document.querySelector('.bro').style.display="none";


let count = 0;
let count2 = 0;

//function to change the turn
const changeTurn = () => {
   if (turn === "O") {
      turn = "X";
      return turn;
   }
   else {
      turn = "O";
      return turn;
   }
}

//function to check win
const checkWin = () => {
   let boxtext = document.getElementsByClassName("boxtext");
   let winBox = [
      [0, 1, 2, 2.8, 5, 0],
      [3, 4, 5, 2.8, 15, 0],
      [6, 7, 8, 2.8, 25, 0],
      [0, 3, 6, -7.5, 15, 90],
      [1, 4, 7, 2.5, 15, 90],
      [2, 5, 8, 12.5, 15, 90],
      [2, 4, 6, 2.5, 15, 135],
      [0, 4, 8, 3.5, 16, 45],
   ]
   winBox.forEach(e => {
      if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
         info.innerHTML = boxtext[e[0]].innerHTML + " Won";
         gameover2 = "true";
         gif.style.display = " block";
         gameOverAudio.play();
         turn = boxtext[e[0]].innerHTML;
         document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw  ) rotate(${e[5]}deg)`;
         document.querySelector('.line').style.width = "30vw";

         // document.querySelector('.bro').className="line";
         // document.querySelector('.bro').classList.toggle('.line');
      }
      if ((boxtext[e[0]].innerHTML !== "") && (boxtext[e[1]].innerHTML !== "") && (boxtext[e[2]].innerHTML !== "")) {
         count = count + 1;
      }
   })
   if (count === 8 && gameover2 !== "true") {
      info.innerHTML = "Match Draw";
      count = 0;
      count2 = 1;
      turn = "X";
   }
   else {
      count = 0;
   }
}

// audio1.play();
//main Logic.
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
   info.innerHTML = "Turn for " + turn;
   let boxtext = element.querySelector(".boxtext");
   element.addEventListener("click", () => {
      boxtext.innerHTML = turn;
      turn = changeTurn();
      turnAudio.play();
      checkWin();
      if (gameover2 !== "true" && count2 !== 1) {
         info.innerHTML = "Turn for " + turn;
      }
   });

   reset.addEventListener("click", () => {
      // let boxtext=document.querySelectorAll(".boxtext");
      boxtext.innerHTML = "";
      // if (gameover2!=="true") {
      //    turn = "X";
      // }
      info.innerHTML = "Turn for " + turn;
      gif.style.display = " none";
      gameover2 = "false";
      count2 = 0;
      document.querySelector('.line').style.width = "0vw";
   })


})


