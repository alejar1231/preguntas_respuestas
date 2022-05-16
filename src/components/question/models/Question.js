module.exports = class Question {
    /**
     * 
     * @param {string} text Es el texto de la pregunta
     * @param {string[]} choices Son las opciones de respuesta de la pregunta
     * @param {string} answer Esta es la respuesta correcta 
     * @param {number} level Es el nivel de la pregunta
     */
    constructor(text, choices, answer, level) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
      this.level = level;
    }
  
    /**
     * 
     * @param {string} choice Opcion de respuesta escogida
     * @returns {boolean} Retorna si la opcion escogida es correcta (true) o incorrecta (false)
     */
    correctAnswer(choice) {
      return choice === this.answer;
    }
  }