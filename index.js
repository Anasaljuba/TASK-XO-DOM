// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let player = 0
let checkP = ""
const p1 = [];
const p2 = [];

const winningConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];



function clickButton(index) {
  repress (index)
  checkWinner()
}





let checkPre =[]




function repress (inexing){
  
  if  (checkPre.some(x => x===inexing)){
    alert("dont push the same button please")
  } else {
    player +=1
    checkPlayer(inexing)
    fillButton(inexing, checkP)
  }
checkPre.push(inexing)


}

/**
 *  if (winningConditions[0].every(x => {
          return p1.includes(x)
        })){
          console.log("player 1 wins")
        } else if (winningConditions[0].every(x => {
          return p1.includes(x)
        })){
          console.log("player 1 wins")
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer(indexs) {
  if(player%2===1){
    checkP = "x"
     p1.push(indexs)
    
      }
 
      else {
        checkP = "o"
        p2.push(indexs)
        
        }
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */



function checkWinner(){
  for (let i = 0; i < 8; i++) {
          
    if (winningConditions[i].every(t => {
      return p1.includes(t)
    })){
      winningAlert("player 1 wins")
     location.reload()
    }
  };
  for (let i = 0; i < 8; i++) {
    
    if (winningConditions[i].every(t => {
      return p2.includes(t)
    })){
      winningAlert("player 2 wins")
      location.reload()
    }
  };

  if (player===9){
    alert("DRAWWWWWWW!")
    location.reload()
    }
}


// function restartGame
function restartGame(){
  window.location.reload();
}