const numberOfRollsinput = document.querySelector("#rolls")
const rollButton = document.querySelector("#dierolls")
const showAllRollsButton = document.querySelector("#DisplayRolls")
const totalinput = document.querySelector("#total-input")
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

        let totalInput = Number("#total".innerHTML) + 0;
        totalInput.innerHTML = 0;
        console.log(dieRolls)

    }
}

)

console.log(showAllRollsButton)
showAllRollsButton.addEventListener('click', function () {
    console.log('show-all-rolls-button, clicked');
    for (let index = 0; index < dieRolls.length; index++) {

      //  let total = 0;
       // total += <value>;
        }
       // console.log(total)
       // })

        resetButton.addEventListener('click', function () {
                console.log("reset-button clicked")
            let resetButton = Number('resetButton'.innerHTML) + 0;
            resetButton.innerHTML = 0;


        })
    })