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
  
    showScores(score) {
      const gameOver = `
        <h1>Result</h1>
        <h2 id="score">Su puntaje es: ${score}</h2>
        `;
      const element = document.getElementById("quiz");
      element.innerHTML = gameOver;
    }
  
    /**
     * 
     * @param {number} currentIndex El número actual de la ronda
     * @param {number} total El número total de rondas
     */
  
    showProgress(currentIndex, total) {
      var element = document.getElementById("progress");
      element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
  }