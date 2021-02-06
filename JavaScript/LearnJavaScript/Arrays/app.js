//Define an array of students
const students = ["Henry", "Ada", "Bright", "John", "Emeka"];
//Another way of defining/declaring array
const names = new Array("Ama", "John");
//Write all the students to the webpage
document.writeln(students);
// Log all students to the console
console.log(students);
// Log the student at index 2 to the console
console.log(students[2]);
//Log names to the console
console.log(names);
//Length of array
console.log(names.length);
/*************************************
 * adding name(s) to names array and logging same to the console
 *
 */
//One way of adding to the array
names[1] = "Amaka";
console.log(names);
console.log(names.length);
//Another way of adding to the array
names[names.length] = "Chuku";
console.log(names);
console.log(names.length);
names[names.length] = "Chuku2";
console.log(names);
console.log(names.length);
