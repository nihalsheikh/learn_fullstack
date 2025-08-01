console.log("Logic and Control Flow")

/*
Conditional Statements: if, else if, else
 - syntax:
            if (<c1>) {
                // some code
            } else if (<c2>) {
                // some code again
            } else {
                // remaining code
            }
*/

// const age = 18;

// if (age > 18) {
//     console.log("You can enter")
// } else if (age === 18) {
//     console.log("You just turned 18, welcome!")
// } else {
//     console.log("Grow up!")
// }

// Falsy Values:    false, 0, '', null, undefined, NaN
// if (0) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }


// Ternary operator
console.log("\n####### Ternary Operator #######")

const age = 18;

if (age >= 18) {
    console.log(`if state: True`)
} else {
    console.log(`if state: False`)
}

age >= 18 ? console.log(`Ternary Op: True`) : console.log(`Ternary Op: False`)
