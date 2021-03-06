export class Interfaz {
    constructor() {}
  
    /**
     * 
     * @param {string} text Pregunta a mostrar en pantalla
     */
    showQuestion(text) {
      const questionTitle = document.getElementById("question");
      questionTitle.innerHTML = text;
    }
  
    /**
     * 
     * @param {string[]} choices Opciones de respuesta de la pregunta 
     */
    showChoices(choices, callback) {
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML = "";
  
      for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => callback(choices[i]));
        button.className = "button";
        button.innerText = choices[i];
        choicesContainer.append(button);
      }
    }

    getUser(user){
      const userContainer = document.getElementById("quiz");
      userContainer.innerHTML=""
      const button = document.createElement("button");
      button.addEventListener("click");
      button.className = "button";
    }
  
    /**
     * 
     * @param {number} score Puntaje total
     */
  
    async showScores(score) {
      const allData = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const users = await allData.json();
      let tableContent = '';
      users.send.map((user) => {
        tableContent += `<tr align = center><td>${user.name}</td><td align = center>${user.score}</td></tr>`;
      })
      const gameOver = `
        <h1>Result</h1>
        <h2 id="score">Su puntaje es: ${score}</h2>
        <br>
        <center>
        <table border cellpadding=10 cellspacing=0>
        <tr>
        <th>Nickname</th>
        <th>score</th>
        </tr>
        ${tableContent}
        </table>
        </center>
        `;
      const element = document.getElementById("quiz");
      element.innerHTML = gameOver;
    }
  
    /**
     * 
     * @param {number} currentIndex El n??mero actual de la ronda
     * @param {number} total El n??mero total de rondas
     */
  
    showProgress(currentIndex, total) {
      var element = document.getElementById("progress");
      element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
  }