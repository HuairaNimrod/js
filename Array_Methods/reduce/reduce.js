const grades = ['A', 'B', 'C'];

const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector('#myList').innerHTML = gpaPoints.join(' ');

function convertGradeToPoints(item){
    let points = 0;
    if(item==="A"){
        points = 4;
    }
    else if(item==="B"){
        points = 3;
    }
    else if(item==="C"){
        points = 2;
    }
    return points;
}

const pointsTotal = gpaPoints.reduce((total, item ) => total + item);
const gpa = pointsTotal / gpaPoints.length;

const paragraph = document.createElement('p');
paragraph.innerHTML = `gpa average: ${gpa}`;
document.body.appendChild(paragraph);

// Expected output: 10



