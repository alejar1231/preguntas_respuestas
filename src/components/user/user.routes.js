const router = require("express").Router();

const {
  getAll, save
} = require("./controllers");

/**
 * route: /api/users
 */
router.get("/", getAll);

/**
 * route: /api/users
 */
router.post("/", save);

module.exports = router;