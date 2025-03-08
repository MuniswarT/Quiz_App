const mongoose = require('mongoose');
const protect = require('../middleware/authMiddleware').protect;


const quizSchema = new mongoose.Schema({
  category: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
});
console.log("Protect Middleware:", protect);

module.exports = mongoose.model('Quiz', quizSchema);
