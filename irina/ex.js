// # Math

// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**


// ## Declare variable classRoom and assign this values ['Tommy','Max', 'Sara', 'Rammy'].
let classRoom =  ['Tommy','Max', 'Sara', 'Rammy'];
console.log(classRoom); //[ 'Tommy', 'Max', 'Sara', 'Rammy' ]


// ## Create a program that prints a random item from classRoom array.
let randomClassroom = classRoom[Math.floor(Math.random()*classRoom.length)];
console.log(randomClassroom); //Max