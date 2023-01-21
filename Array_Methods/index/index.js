const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber);

const text = `<p>numbers: ${numbers}</p><p>lucky number: ${luckyNumber}</p><p>index lucky number: ${luckyIndex}</p>`;

document.querySelector('#myList').innerHTML = text;