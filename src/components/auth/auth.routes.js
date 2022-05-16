const router = require("express").Router();

const {
  register
} = require("./controllers");

/**
 * route: /api/auth/register
 */
router.get("/register", register);

module.exports = router;