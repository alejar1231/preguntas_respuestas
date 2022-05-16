const router = require("express").Router();

const {
  getQuestions
} = require("./controllers");

/**
 * route: /api/questions
 */
router.get("/", getQuestions);

module.exports = router;