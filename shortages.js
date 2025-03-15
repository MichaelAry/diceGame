function outPlHands() {
  document.getElementById("pl1Hand").innerText = allPlHands[0];
  document.getElementById("pl2Hand").innerText = allPlHands[1];
}

function allowThrghDice() {
  document.getElementById("thrghDice").disabled = false;
  document.getElementById("skipTurn").disabled = true;
  document.getElementById("remove2Dice").disabled = true;
  document.getElementById("removeSumDice").disabled = true;
  document.getElementById("remove1stDice").disabled = true;
  document.getElementById("remove2ndDice").disabled = true;
}

function prohibitThrghDice() {
  document.getElementById("thrghDice").disabled = true;
  document.getElementById("remove2Dice").disabled = false;
  document.getElementById("removeSumDice").disabled = false;
  document.getElementById("skipTurn").disabled = false;
  document.getElementById("remove1stDice").disabled = false;
  document.getElementById("remove2ndDice").disabled = false;
}
