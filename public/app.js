import { Interfaz } from './models/Interfaz.js';

let index = 0;
let score = 0;
let user = {
  name: '',
  score: 0
};

function tryAgain() {
  let tryDiv = document.getElementById("tryDiv");
  tryDiv.style.display = "block";
}

const renderPage = async (quiz,interfaz) => {
  if (quiz.length === index){
      user.score = score;
      await postData('http://localhost:3000/api/users', user);
      interfaz.showScores(score);
      tryAgain();
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
          tryAgain();
        }
      });  
  }
};

function lockNickname() {
  const nickname = document.getElementById("nickname");

  if (nickname.value !== '') {
    nickname.disabled = true;
    user.name = nickname.value;
  }
}

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
  const interfaz = new Interfaz()
    
  getData('http://localhost:3000/api/questions')
  .then(data => {
    renderPage(data.data, interfaz);
  });
}

function resetValues() {
  index = 0;
  score = 0;
  user.name = '';
  user.score = 0;
  const tryDiv = document.getElementById("tryDiv");
  tryDiv.style.display = "none";
  const divQuiz = document.getElementById("quiz");
  divQuiz.innerHTML = `<div>
        <label for="">Nickname:</label>
        <input id="nickname" type="text" placeholder="Ingresa tu nickname">
        <button id="saveNickname">Guardar</button>
    </div>
    <h1>Preguntas</h1>
    <hr>

    <h1 id="question"></h1>
    <div id="choices"></div>
    <hr style="margin-top: 50px;">

    <footer>
        <p id="progress"></p>
        <button id="exit">Retiro voluntario</button>
    </footer>`;
  main();
  events();
}

async function exit(){
  const interfaz = new Interfaz()
  user.score = score
  await postData('http://localhost:3000/api/users', user);
  await interfaz.showScores(user.score);
  tryAgain();
}

function events() {
  const btnSaveNickname = document.getElementById("saveNickname");
  btnSaveNickname.addEventListener("click", lockNickname);

  const btnTryAgain = document.getElementById("tryAgain");
  btnTryAgain.addEventListener("click", resetValues);

  const btnExit = document.getElementById("exit");
  btnExit.addEventListener("click", exit);
}

main();
events();