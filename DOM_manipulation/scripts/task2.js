/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var my_name = "Nimrod Huaira";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = my_name;

// Step 3: declare and instantiate a variable to hold the current year
var curr_year = 2023;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = curr_year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let my_picture = "images/img.jpg";

// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', my_picture);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var favorite_food = ["Chaufa", " Causa Limeña", " Pasta"];

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').innerHTML = favorite_food;
// Step 3: declare and instantiate a variable to hold another favorite food

var fav_food_extra = " Pizza";
// Step 4: add the variable holding another favorite food to the favorite food array

favorite_food.push(fav_food_extra);
// Step 5: repeat Step 2

document.querySelector('#food').innerHTML = favorite_food;
// Step 6: remove the first element in the favorite foods array

favorite_food.shift();
// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favorite_food;

// Step 8: remove the last element in the favorite foods array
favorite_food.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favorite_food;


