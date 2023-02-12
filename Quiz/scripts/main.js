const url = "https://huairanimrod.github.io/TA/questions.json";

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
        question.appendChild(h4);
        // option.textContent = premise.options;
        (premise.options).forEach(element => {

            let option= document.createElement('div');
            let input = document.createElement('input');
            let label = document.createElement('label');
            
            input.type = "radio";
            input.id = element;
            input.value = element;
            input.name = premise.answer;

            label.for = element;
            label.innerText = element;

            option.appendChild(input);
            option.appendChild(label);
            question.appendChild(option);
       });

       
        // question.appendChild(option);
        exam.appendChild(question);


    });


  };