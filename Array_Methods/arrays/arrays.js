const charArray = ['one', 'two', 'three']
const arrayHtml = charArray.map(function (item) {
    if(item!=", "){
        return `<li>${item}</li>`;
    }
    
});
document.getElementById("myList").innerHTML = arrayHtml.join('');
