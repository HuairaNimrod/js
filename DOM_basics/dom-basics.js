const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// adding an image
const image = document.createElement('img');
image.setAttribute('src', 'https://placeimg.com/200/200/animals');
image.setAttribute('alt', 'animal picture');

document.body.appendChild(image);

// adding more html elements
const newDiv = document.createElement("div");
newDiv.innerHTML = "<h4>List added with JS</h4><ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);


// adding more html elements
const newSect = document.createElement('section');
newSect.innerHTML = "<h2>JS DOM basic</h2><p>Nimrod Huaira</p>";
document.body.appendChild(newSect);

