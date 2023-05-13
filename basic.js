//*Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//*Add Two Numbers with JavaScript
/*
    TODO: Change the 0 so that sum will equal 20.
    const sum = 10 + 0;
*/
const sum = 10 + 10;
console.log(sum);

//*Subtract One Number from Another with JavaScript
/*
    TODO: Change the 0 so the difference is 12.
    const difference = 45 - 0;
*/
const difference = 45 - 33;
console.log(difference);

//*Multiply Two Numbers with JavaScript
/*
    TODO: Change the 0 so that product will equal 80.
    const product = 8 * 0;
*/
const product = 8 * 10;
console.log(product);

//*Divide One Number by Another with JavaScript
/*
    TODO: Change the 0 so that the quotient is equal to 2.
    const quotient = 66 / 0;
*/
const quotient = 66 / 33;
console.log(quotient);

//*Increment a Number with JavaScript
/*
    let myVar = 87;
    myVar = myVar + 1;   o   myVar++;   = 88
*/
let myVar = 87;
myVar++;
console.log(myVar);

//*Decrement a Number with JavaScript
/*
    myVar = myVar - 1;  o   myVar--;    == 87
*/
myVar--;
console.log(myVar);

//*Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
let myDecimal = 6.5;

//*Multiply Two Decimals with JavaScript
/*
    TODO: Change the 0.0 so that product will equal 5.0.
    const product = 2.0 * 0.0;
 */
const products = 2.0 * 2.5;
console.log(products);

//*Divide One Decimal by Another with JavaScript
/*
    TODO: Change the 0.0 so that quotient will equal to 2.2.
    const quotient = 0.0 / 2.0; // Change this line
*/
const quotients = 4.4 / 2.0; // Change this line
console.log(quotients);

//*Finding a Remainder in JavaScript (módulo en español)
/*
    TODO: Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
    const remainder = 0;
*/
const remainder = 11 % 3;
console.log(remainder);

//*Compound Assignment With Augmented Addition
/*
    TODO: Convert the assignments for a to use the += operator.
    let a = 3;
    a = a + 12; = 15
*/
let a = 3;

a += 12;

console.log(a);

//*Compound Assignment With Augmented Subtraction
/*
    TODO: Convert the assignments for b to use the -= operator.
    let b = 11;
    b = b - 6;
*/
let b = 11;
b -= 6;
console.log(b);

//*Compound Assignment With
/*
    TODO: Convert the assignments for c to use the *= operator.
    let c = 4.6;
    c = c * 10;
*/
let c = 4.6;
c *= 10;
console.log(c);

//*Compound Assignment With Augmented Division
/*
    TODO: Convert the assignments for d to use the /= operator.
    let d = 108;
    d = d / 4;
*/
let d = 108;
d /= 4;
console.log(d);

//*Escaping Literal Quotes in Strings
/*
    TODO: Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
    I am a "double quoted" string inside "double quotes".
    const myStr = ""
*/
const myStr = 'I am a "double quoted" string inside "double quotes".';
console.log(myStr);

//*Quoting Strings with Single Quotes
/*
    TODO: Change the provided string to a string with single quotes at the beginning and end and no escape characters.
    TODO: Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
    ?You should have two single quotes ' and four double quotes ".
    const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
*/
const myStrs = '<a href="http://www.example.com"target="_blank">Link</a>';
console.log(myStrs);

//*Escape Sequences in Strings
/*
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \t	tab
    \r	carriage return
    \b	word boundary
    \f	form feed
    TODO: Assign the following three lines of text into the single variable myStr using escape sequences.
    *   FirstLine
    *       \SecondLine
    *   ThirdLine
    const myStr = "";
*/
const myStrss = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStrss);

//*Concatenating Strings with Plus Operator
/*
    TODO: Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
    const myStr = "";
*/
const myStr2 = "This is the start." + " This is the end.";
console.log(myStr2);

//*Concatenating Strings with the Plus Equals Operator
/*
    TODO: Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.
    let myStr;
*/
let myStr3;
myStr3 = "This is the first sentence.";
myStr3 += " This is the second sentence.";

//*Constructing Strings with Variables
/*
    TODO: Set myName to a string equal to your name and build myStr with myName between the strings My name is ... and I am well!
    let myName;
    let st;
*/
let myName = "Nigell";
let st = 'My name is ' + myName + ' and I am well!'
//let st = `My name is ${myName} and I am well!`;
console.log(st);

//*Find the Length of a String
/*
    TODO: Use the .length property to set lastNameLength to the number of characters in lastName.
    let lastNameLength = 0;
    const lastName = "Lovelace";
*/
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

//*Use Bracket Notation to Find the First Character in a String
/*
    TODO: Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
    let firstLetterOfLastName = "";
    const lastName = "Lovelace";
*/
let firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//*Understand String Immutability
/*
    *In JavaScript, String values are immutable, which means that they cannot be altered once created.
    !let myStr = "Bob";
    !myStr[0] = "J";
*/
let hi = "Jello World";
hi = "Hello World";
console.log(hi);

//*Use Bracket Notation to Find the Nth Character in a String
/*
    TODO: Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
    const lastName = "Lovelace";
*/
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

//*Use Bracket Notation to Find the Last Character in a String
/*
    TODO: Use bracket notation to find the last character in the lastName variable.
    const lastName = "Lovelace";
*/
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

//*Use Bracket Notation to Find the Nth-to-Last Character in a String
/*
    TODO: Use bracket notation to find the second-to-last character in the lastName string.
    const lastName = "Lovelace";
*/
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

//*Word Blanks
/*
    TODO: In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = `${myNoun} ${myAdjective} ${myVerb} ${myAdverb}`;
console.log(wordBlanks);

//*Store Multiple Values in one Variable using JavaScript Arrays
/*
    *With JavaScript array variables, we can store several pieces of data in one place.
    TODO: Modify the new array myArray so that it contains both a string and a number (in that order).
    const myArray = [];
*/
const myArray = ["hola", 2];
console.log(myArray);

//*Nest one Array within Another Array
/*
    *You can also nest arrays within other arrays, like below:
    ?const teams = [["Bulls", 23], ["White Sox", 45]];
    TODO: Create a nested array called myArray.
    const myArray = [];
*/
const ourArray = ["hey", 2, ["como", "estas", [3, 4]]];
console.log(ourArray);

//*Access Array Data with Indexes
/*
    TODO: Create a variable called myData and set it to equal the first value of myArray using bracket notation.
    const myArray = [50, 60, 70];
*/
const myArray2 = [50, 60, 70];
let data = myArray2[0];
console.log(data);

//*Modify Array Data With Indexes
/*
    *Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
    TODO: Modify the data stored at index 0 of myArray to a value of 45.
    const myArray = [50, 60, 70];
*/
myArray2[0] = 45;
console.log(myArray2);

//*Access Multi-Dimensional Arrays With Indexes
/*
    *One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
    TODO: Using bracket notation select an element from myArray such that myData is equal to 8.
    const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
    ];
    const myData = myArray[0][0];
*/
const myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray3[2][1];
console.log(myData);

//*Manipulate Arrays With push Method
/*
    TODO: Push ["dog", 3] onto the end of theArray variable.
*/
const theArray = [
    ["John", 23],
    ["cat", 2],
];
theArray.push(["dog", 3]);
console.log(theArray)

//*Manipulate Arrays With pop Method
/*
    TODO: Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
*/
let removedFromMyArray = theArray.pop()
console.log(removedFromMyArray)
console.log(theArray)

//*Manipulate Arrays With shift Method
/*
    TODO: Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/
removedFromMyArray = theArray.shift()
console.log(removedFromMyArray)

//*Manipulate Arrays With unshift Method
/*
    TODO: Add ["Paul", 35] to the beginning of the myArray variable using unshift().
*/
theArray.unshift(['Paul', 35]);
console.log(theArray)

//*Shopping List
/*
    TODO: Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
*/
const myList = [['chocolate', 15], ['cola', 5], ['banano', 1], ['juegos', 52], ['piscina', 5]];
console.log(myList)

//*Functions
/*
    TODO: Write a reusable function
*/
function reusableFunction() {
    console.log("Hi World")
}
reusableFunction()

//*Functions with Args
/*
    TODO: Write a reusable function with args
*/
function functionWithArgs(a, b) {
    console.log(a + b)
}
functionWithArgs(2, 3)

//*Functions with args
/*
    TODO: Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/
function timesFive(a) {
    a *= 5;
    return a;
}
console.log(timesFive(2))

//*Global Scope and Functions
/*
    ?In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
    TODO: Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10. Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5

}

// Only change code above this line

function fun2() {
    let output = "";
    if (typeof myGlobal !== "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal !== "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1(); fun2()

//*Local Scope and Functions
/*
    ?Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
*/

function myLocalScope() {
    // Only change code below this line
    let myVarr
    console.log('inside myLocalScope: ', myVarr);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope: ', myVar); //myVarr*

//*Global vs. Local Scope in Functions
/*
    ?It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
*/
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater"
    // Only change code above this line
    return outerWear;
}

console.log(myOutfit());

//*Understanding Undefined Value returned from a Function
/*
    ?A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
*/
// Setup
let summ = 0;

function addThree() {
    summ = summ + 3;
}

function addFive() { summ += 5 }

console.log(addThree());
console.log(summ)
console.log(addFive());
console.log(summ)

//*Assignment with a Returned Value
