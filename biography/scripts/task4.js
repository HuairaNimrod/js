/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

const personalInfo = {

// Step 2: Inside of the object, add a property named name with a value of your name as a string
name : "Nimrod Huaira",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
photo : "images/img.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
favoriteFoods: ["causa limena", "ceviche", "pachamanca"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
hobbies: ["videogames", "walking","soccer"],
// Step 6: Add another property named placesLived with a value of an empty array
placesLived:[
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    {    
        place:"Lima",
        length:"25 years"
    },
    {
        place:"Montevideo",
        length:"2 years"  
    },
    {
        place:"Provo",
        length:"1 years"  
    },
    {
        place:"Rexburg",
        length:"1 years"  
    }
]
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the
// HTML <span> element with an ID of name

document.querySelector('#name').textContent = personalInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> 
//element with an ID of photo

let my_picture = "images/img.jpg";
document.querySelector('img').setAttribute('src', my_picture);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> 
//element with an ID of photo

document.querySelector('#photo').setAttribute('alt', 'nim picture')

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> 
//element and place its value in the <li> element

var favorite_food = personalInfo.favoriteFoods;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element 
//with an ID of favorite-foods
var html = ""
for (let i=0; i<favorite_food.length; i++) {
     html += `<li>${favorite_food[i]}</li>`;
}
    document.querySelector('#favorite-foods').innerHTML =html;
// Step 6: Repeat Step 4 for each hobby in the hobbies property
var favorite_hobbies = personalInfo.hobbies;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
html_hobbies = "";
for (let j=0; j<favorite_hobbies.length; j++) {
    html_hobbies += `<li>${favorite_hobbies[j]}</li>`;
}
    document.querySelector('#hobbies').innerHTML= html_hobbies;
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
var placesss = personalInfo['placesLived'];
html_cities = "";

for(let x=0; x<placesss.length; x++){
    const place = document.createElement("dt");
    place.innerHTML = placesss[x].place;
    const length = document.createElement("dd");
    length.innerHTML = placesss[x].length;
    document.querySelector("#places-lived").appendChild(place);
    document.querySelector("#places-lived").appendChild(length);

    // html_cities += `<dt>${placesss[x].place}</dt><dd>${placesss[x].length}</dd>`;
     
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element
// with an ID of places-lived
// document.querySelector('#places-lived').append(html_cities);