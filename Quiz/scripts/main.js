const url = "https://huairanimrod.github.io/TA/questions.json";

var answer = [];
let userAns = [];
async function getQuestionsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.quiz);
    displayPresentations(data.quiz);
  }

  getQuestionsData(url);

  
  const displayPresentations = (questions) =>{

    const exam = document.querySelector('div.quiz');

    questions.forEach(premise => {
        let question= document.createElement('div');
        let h4 = document.createElement('h4');
        
        
  

        h4.textContent = premise.question;
        answer.push(premise.answer);
        question.appendChild(h4);
        var i =0;
        // option.textContent = premise.options;
        (premise.options).forEach(element => {
            
            let option= document.createElement('div');
            let input = document.createElement('input');
            let label = document.createElement('label');
            
            input.type = "radio";
            input.id = element;
            input.value = i;
            input.name = premise.answer;
            input.addEventListener("click", function(){
            userAns.push(input.value);
            });

            label.for = element;
            label.innerText = element;

            option.appendChild(input);
            option.appendChild(label);
            question.appendChild(option);
           
            i++;

            
       });

       
        // question.appendChild(option);
        exam.appendChild(question);

       
    });
       

};

function grade(){

    console.log(answer);
    console.log(userAns);

    

    if(answer.length!= userAns.length){
        if(confirm("You have remaining questions without answer, are you sure you want to submit it?")){
            nextWindow();
        };

    }
    
}

function nextWindow(){

    let score = "(:";
    document.querySelector('div.quiz').style.display = "none";
    document.querySelector('button').style.display = "none";
    const span = document.querySelector('span');
    span.innerText = `Your score is score ${score}`;

}

