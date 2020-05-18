const numberOfRollsinput = document.querySelector("#rolls")
const rollButton = document.querySelector("#dierolls")

// let theText = myTextInput.value;

// const newDiceString = 'Show all Rolls' + numberRolled + "</>";
// showAllRollsElement.innerHTML += newDiceString;

let dieRolls = []
console.log(rollButton)
dieRolls.push("x6");
console.log(dieRolls);
rollButton.addEventListener('click', function () {
    console.log('roll-button, clicked');
    var numberOfRolls = numberOfRollsinput.value
    console.log(numberOfRolls)

})

for (let numberOfRolls = 0; numberOfRolls < 3; numberOfRolls++) {
    console.log('number of rolls');
    var rand = 1 + Math.floor(Math.random(0.0) * 6) + 1;
    console.log(rolls)
}

var d = Math.random();
if (d < 0.5) {
    console.log("Cramer is Super")
    let Total = Number(Total.innerHTML) + 1;
    Total.innerHTML = Total;

}

showAllRollsButton.addEventListener('click', function () {
    console.log('ShowAllRollsButton, clicked');
    var showAllRollsButton = showAllRollsButtoninput.value
    console.log(showAllRollsButton)
})


const newDiceString = '<li class="dice">' + numberRolled + "</li>";
allRollsElement.innerHTML += newDiceString;