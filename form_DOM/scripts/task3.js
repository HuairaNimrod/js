/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    
// Step 2: In the function, return the sum of the parameters number1 and number2
return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    let number1 = document.querySelector('#addend1').value;
    document.querySelector('#addend1').value = '';
    let number2 = document.querySelector('#addend2').value;
    document.querySelector('#addend2').value = '';
    const a1 = parseInt(number1);
    const a2 = parseInt(number2);

    const suma = add(a1,a2);

// Step 4: Assign the return value to an HTML form element with an ID of sum
document.querySelector('#sum').value = suma;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const sumButton = document.querySelector('#addNumbers');
sumButton.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let number1 = document.querySelector('#minuend').value;
    document.querySelector('#minuend').value = '';
    let number2 = document.querySelector('#subtrahend').value;
    document.querySelector('#subtrahend').value = '';
    const a1 = parseInt(number1);
    const a2 = parseInt(number2);

    const result = subtract(a1,a2);
    document.querySelector('#difference').value = result;
}

const subtractButton = document.querySelector('#subtractNumbers');
subtractButton.addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2){
    return number1 * number2;
}

function mulitplyNumbers(){
    let number1 = document.querySelector('#factor1').value;
    document.querySelector('#factor1').value = '';
    let number2 = document.querySelector('#factor2').value;
    document.querySelector('#factor2').value = '';
    const a1 = parseInt(number1);
    const a2 = parseInt(number2);

    const result = multiply(a1,a2);
    document.querySelector('#product').value = result;
}

const productButton = document.querySelector('#multiplyNumbers');
productButton.addEventListener("click", mulitplyNumbers);



// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let number1 = document.querySelector('#dividend').value;
    document.querySelector('#dividend').value = '';
    let number2 = document.querySelector('#divisor').value;
    document.querySelector('#divisor').value = '';
    const a1 = parseInt(number1);
    const a2 = parseInt(number2);

    const result = divide(a1,a2);
    document.querySelector('#quotient').value = result;
}

const quotientButton = document.querySelector('#divideNumbers');
quotientButton.addEventListener("click", divideNumbers);



// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year
var currYear = 0;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currYear = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = currYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const intArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = intArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').innerHTML = intArray.filter( element => element%2!=0);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').innerHTML = intArray.filter( element => element%2==0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').innerHTML = intArray.reduce((total, item) => total + item);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const timesTwo = intArray.map(function (item) {
     return item*2;
  });
  document.querySelector("#multiplied").innerHTML = timesTwo.join();
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").innerHTML = timesTwo.reduce((total, item) => total + item);