const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);



//This code cna help you to recognize what kind of event has been triggered.

// function copyInput(event) {
//     // take a look at the event!
//     console.log(event);
//     const inputElement = document.getElementById("inputBox");
//     const outputElement = document.getElementById("output");
//     outputElement.innerHTML = inputElement.value;
//   }


const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}