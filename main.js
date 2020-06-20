const numberOfRollsinput = document.querySelector("#rolls")
const rollButton = document.querySelector("#dierolls")
const showAllRollsButton = document.querySelector("#DisplayRolls")
const totalinput = document.querySelector("#total-input")
const resetButton = document.querySelector("#reset-button")
//const dieRollsTotal =document.querySelector("#die-rolls-total")


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
        //Sum the results from the dieRolls array, and display the total in the 
        //Total element using innerHTML.

        // Get the <ol> object from the DOM
        let dieRollsTotal = document.getElementById("oL");
        // Loop through the children of the <ol>
        for (result = 0; result < total.length; result++) {
            // Test that the node is indeed an <li>
            if (dieRollsTotal[result].nodeName == 'lI') {
                // Change this line to manipulate the text however you need
                dieRollsTotal[result].innerHTML = result;
            }
            console.log(dieRollsTotal)
        }



        //  let li = document.createElement('li');
        // li.content = 'sums-roll';
        //console.log(menu.innerHTML);
    }
})
//This criterion is linked to a Learning OutcomeAdd an event listener to
// the "Show All Rolls" button, which loops over the dieRolls array, to get
// each individual die roll and display it as a List Item within the 
//"All Rolls" element.


console.log(showAllRollsButton)
showAllRollsButton.addEventListener('click', function () {
    console.log('show-all-rolls-button, clicked');
    for (let index = 0; index < dieRolls.length; index++) {

        //  let total = 0;
        // total += <value>;
    }
    // })
    function calculate(totalinput) {
        let numbers = [
            document.getElementById("num_one").value,
            document.getElementById("num_two").value,
            document.getElementById("num_three").value
        ];
        let sum = Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2]);
        document.getElementById("display_sum").innerHTML = sum;
        console.log(sum)

    }


    resetButton.addEventListener('click', function () {
        console.log("reset-button clicked")
        let resetButton = Number('resetButton'.innerHTML) + 0;
        resetButton.innerHTML = 0;
    })
})             