
let count = 0

function increment() {
    count = count + 1
    document.getElementById('count-num').innerText = count
}


function decrement() {
    count -= 1 // Using the += technique
    document.getElementById('count-num').innerText = count
}

function reset () {
    count *=0 // Using the += technique
    document.getElementById('count-num').innerText = count
} //This function resets the value of count (the counter)

function save() {
    document.getElementById('result').innerText += ' - ' + count //replace the text with id='result' with count current value and add a hyphen without overwriting what was there previously
    count *=0 // Proceed to reset the active counter to zero each time 'Save' button is clicked
    document.getElementById('count-num').innerText = count //replace count num text with new count value (0)
} //This function replaces the value of a paragraph with id 'result' with the innerText plus - plus previous counts then it resets the innertext in count-num paragraph to 0.


let welcomeEl = document.getElementById('welcome-el')
let greeting = 'Hello there! My name is Anatu Green'

welcomeEl.innerText = greeting

welcomeEl.innerText = welcomeEl.innerText + "👌👀"
//We can use the += method to do the above:

welcomeEl.innerText += "😃" // Using the += technique will take what is before the equal sign and add it to what is after it. SO no need for a repeat.

//document.getElementById("count-num").innerText = 1

// let firstBatch = 100;
// let secondBatch = 56
// let count = firstBatch + secondBatch;
// console.log(count)

// let myAge = 28;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge)

//Practice 3: Increment and decrement

// let count = 5  //Declaring the count variable
// count = count +1 //Adding 1 to count (increment)
// count = count + 5 // This will increment the previous count value again by 5
// count = count - 10
// console.log(count)

//Practice 4: 

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75

// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)

// function increment()
// {
//     console.log('Button clicked')
// }

//New challenge: Function that logs out a countdown

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

//New challenge: Function that logs out 42
// function fortyTwo() {
//     console.log(42)
// }

// fortyTwo()


//New challenge: Function that logs out sum of laps

// let lap1 = 20
// let lap2 = lap1 -5
// let lap3 = 40

// function sumOfLaps() {
//     console.log(lap1 + lap2 + lap3)
// }

// sumOfLaps()

//If I wanted to create a variable that works inside of the function alone, I could

// function sumOfLaps() {
//     let lapTotal = lap1 + lap2 + lap3
//     console.log(lapTotal)
// }

// sumOfLaps()

//The two functions above will result in same thing but I will not be able to reuse the variable lapTotal outside of the scope of the variable unless I want to create another variable of same name 



//New challenge: increment a variable by 1 and run it thrice

// let lapsCompleted = 0

// function incrementLaps() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()
 
// //Challenge:

// let name = "Anatu"
// let greeting = 'How do you do?'

// let myGreeting = name + ", " + greeting + "!"

// console.log(myGreeting)

//New challenge