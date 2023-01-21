const unorderList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', onButtonClicked);

function onButtonClicked() {
    var item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const textContainer = document.createElement('span');
    const itemButton = document.createElement('button');

    listItem.appendChild(textContainer);
    textContainer.textContent = item;
    
    listItem.appendChild(itemButton);
    itemButton.textContent = 'Delete';

    unorderList.appendChild(listItem);

    //button function
    itemButton.addEventListener('click', ()=>{
        unorderList.removeChild(listItem);
    });

}