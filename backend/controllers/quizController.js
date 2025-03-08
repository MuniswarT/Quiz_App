const axios = require("axios");

const getQuizzes = async (req, res) => {
    try {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");

        if (!response.data || !response.data.results) {
            return res.status(500).json({ message: "No questions received from API" });
        }

        res.json(response.data.results);  // ✅ Send quiz questions to frontend
    } catch (error) {
        console.error("Error fetching quizzes:", error.message);
        res.status(500).json({ message: "Failed to fetch quizzes", error: error.message });
    }
};

module.exports = { getQuizzes };
