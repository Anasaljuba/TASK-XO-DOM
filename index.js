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
console.log(index)


function clickButton(index) {
  console.log(`Button number ${index} is clicked`);

  
    player +=1

    console.log (player)
    if(player%2===1){
      checkP = "x"
        }
    
        else {
          checkP = "o"
          }
        fillButton(
        index, checkP)

}



/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {
  
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
let player1=[]
let player2=[]
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function checkWinner(checkP){

if(checkP==="x"){
  player1.push(player)

}
else{
  player2.push(player)
}
if(player1.includes(winningConditions)){
  console.log("player x wins ")
}
if(player2.includes(winningConditions)){
  console.log(" player o wins ")
}
return checkWinner
}


// function restartGame
