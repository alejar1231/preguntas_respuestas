import { Interfaz } from './models/Interfaz.js';

let index = 0;
let score = 0;
let user = '';

const renderPage = (quiz,interfaz) => {
  // if (user != ''){
  //   interfaz.getUser(user);
    if (quiz.length === index){
        interfaz.showScores(score);
    } else {
        interfaz.showQuestion(quiz[index].text);
        interfaz.showProgress(index + 1, quiz.length);
        interfaz.showChoices(quiz[index].choices, (currentChoice) => {
          if (currentChoice === quiz[index].answer) {  
            score++;
            index++;
            renderPage(quiz,interfaz);
          } else {
            score = 0;
            index = 0;
            interfaz.showScores(score);
            alert("Perdiste");
          }
        });  
    }
  // }
};

async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

function main () {
    const interfaz = new Interfaz ()
    
  getData('http://localhost:3000/api/questions')
  .then(data => {
    renderPage(data.data, interfaz);
  });
}

main();