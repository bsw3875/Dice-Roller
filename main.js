const numberOfRollsinput = document.querySelector("#rolls")
const rollButton = document.querySelector("#dierolls")
const showAllRollsButton = document.querySelector("#DisplayRolls")
const totalinput = document.querySelector("#total-input")
const totalDiceSum = document.querySelector("#total-dice-sum")
const resetButton = document.querySelector("#reset-button")


let dieRolls = []
console.log(dieRolls)
console.log(rollButton)
rollButton.addEventListener('click', function () {
  console.log('roll-button, clicked');
  let numberOfRolls = numberOfRollsinput.value
  console.log(numberOfRolls)
  for (let index = 0; index < numberOfRolls; index++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
    dieRolls.push(roll);

  }

  //document.querySelector("h1").innerHTML
})
//return (rolls == total) ? total : rolls + ' = ' + total;




//Add an event listener to the "Show All Rolls" button, which loops
// over the dieRolls array, to get each individual die roll and
// display it as a List Item within the "All Rolls" element.



console.log(showAllRollsButton)
showAllRollsButton.addEventListener('click', function () {
  console.log('show-all-rolls-button, clicked');
  for (let index = 0; index < dieRolls.length; index++) {
    function getSumDiceValue() {
      let dice = document.getElementsByClassName("dice");
      let diceTotal = 0;
      for (let item = 0; item < dice.length; item++) {
        diceTotal += Number(dice[item]);
      };

      return diceTotal;
    }
    let totalDiceSum = document.createElement("p");
    totalDiceSum.className = "dice-sum";
    totalDiceSum.innerHTML = getSumDiceValue();
  }


})




//})




resetButton.addEventListener('click', function () {
  console.log("reset-button clicked")
  let resetButton = Number('resetButton'.innerHTML) + 0;
  resetButton.innerHTML = 0;
})


//})
