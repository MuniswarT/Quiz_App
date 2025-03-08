const express = require("express");
const { getQuizzes } = require('../Controllers/quizController');
const router = express.Router();

router.get("/", getQuizzes);  

module.exports = router;

