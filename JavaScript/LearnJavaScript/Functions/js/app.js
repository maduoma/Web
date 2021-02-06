"use strict";

//Parameterized function declaration
//Function Declaration/definition
function calculate(value) {
  const myValue = value * 2.54;
  console.log("The value in cm is " + myValue + "cm");
  return myValue;
}
//Method invocatuion
const width = calculate(20);
const height = calculate(30);
//Prints undefined if there's no return type.
const dimensions = [width, height];
console.log(dimensions);

console.log("This is an example of function expression shown below:");
// Function Expression: function name is optional (ie you can decide to remove or add calculate), this is because we are now working with anotherValue variable not the function.
const anotherValue = function (value) {
  const myValue = value * 2.54;
  console.log("The value in cm is " + myValue + "cm");
  return myValue;
}; //(10000); //This is another way to call function expression just immediadiately after the function expression.
const width2 = anotherValue(90);
//An array can take any thing including a function as shown here in place of const height2 = anotherValue(90).
const dimensions2 = [width2, anotherValue(80)];
console.log(dimensions2);

//Arrow function
const multiply = (num1, num2) => num1 * num2;
console.log(multiply);
