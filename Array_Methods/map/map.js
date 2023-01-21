const grades = ['A', 'B', 'A'];

const gpa = grades.map(function (item) {
    if(item==="A"){
        return `<li>4</li>`;
    }
    else if(item==="B"){
        return `<li>3</li>`;
    }
});
document.getElementById("myList").innerHTML = gpa.join('');
