const numOfPl = 2;
const allPlHands = [[], []];
let currentPlayer = 1;
let dice1 = 0;
let dice2 = 0;
let diceSum = 0;

fillPlsHands(allPlHands);

outPlHands();

allowThrghDice();

function fillPlsHands(allPlHands) {
  for (let j = 0; j < numOfPl; j++) {
    for (let i = 0; i < 12; i++) {
      allPlHands[j][i] = allPlHands[j][i] = i + 1;
    }
  }
}

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  diceSum = dice1 + dice2;

  if (currentPlayer === 1) {
    document.getElementById(
      "pl1Dice"
    ).innerText = `числа раздельно: ${dice1}, ${dice2}\n сумма: ${diceSum}`;
  } else {
    document.getElementById(
      "pl2Dice"
    ).innerText = `числа раздельно: ${dice1}, ${dice2}\n сумма: ${diceSum}`;
  }
  prohibitThrghDice();
}

function remove2Dice() {
  allPlHands[currentPlayer - 1] = allPlHands[currentPlayer - 1].filter(
    (die) => die !== dice1 && die !== dice2
  );

  outPlHands();
  allowThrghDice();
  chckWin();
  chngCrrntPl();
}

function removeSumDice() {
  allPlHands[currentPlayer - 1] = allPlHands[currentPlayer - 1].filter(
    (die) => die !== dice1 + dice2
  );

  outPlHands();
  allowThrghDice();
  chckWin();
  chngCrrntPl();
}

function chckWin() {
  if (allPlHands[currentPlayer - 1].length === 0) {
    alert(`игрок ${currentPlayer} победил`);
    document.getElementById("thrghDice").disabled = true;
    document.getElementById("remove2Dice").disabled = true;
    document.getElementById("removeSumDice").disabled = true;
  }
}

function chngCrrntPl() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("plTurn").innerText = `ход игрока ${currentPlayer}`;
}

function resetGame() {
  currentPlayer = 1;
  fillPlsHands(allPlHands);
  document.getElementById("pl1Dice").innerText = document.getElementById(
    "pl2Dice"
  ).innerText = "-";
  document.getElementById("plTurn").innerText = "ход игрока 1";
  outPlHands();
  allowThrghDice();
}
