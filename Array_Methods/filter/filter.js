const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const result = fruits.filter(word => word.length > 5);

const paragraph = document.createElement('p');
paragraph.innerHTML = result;
document.body.appendChild(paragraph);
