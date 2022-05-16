const { response } = require("express");
const Question = require("../models/Question.js");
const data = require("../../../data/questions");

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
  const item = arr[randomIndex];
  return item;
}

function selectQuestions (data) {
  let finalQuestions = [];
  for (let i=1; i <= 5; i++){
    const dataLevel = data.filter (data => data.level === i)
    const randomQuestion = getRandomItem (dataLevel);
    finalQuestions[finalQuestions.length]=randomQuestion;
  }
  return finalQuestions;
}

module.exports = async function (req, res = response) {
    try {
      const dataQuestion = selectQuestions(data);

      const questions = dataQuestion.map((question) => {
        return new Question(
            question.question, 
            question.choices, 
            question.answer, 
            question.level
          );
      });

      res.status(200).send({
        data: questions
      });
    } catch (error) {
      res.status(400).send({
        message: error
      });
    }
  };