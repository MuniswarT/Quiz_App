const Result = require("../models/Result");

// Save quiz result
const saveResult = async (req, res) => {
    try {
        const { score, totalQuestions } = req.body;
        const userId = req.user.id;

        const result = new Result({ user: userId, score, totalQuestions });
        await result.save();

        res.status(201).json({ message: "Result saved successfully", result });
    } catch (error) {
        res.status(500).json({ message: "Error saving result" });
    }
};

// Get leaderboard (Top 10 scores)
const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Result.find()
            .populate("user", "name")
            .sort({ score: -1, date: 1 }) // Highest scores first
            .limit(10);

        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: "Error fetching leaderboard" });
    }
};

module.exports = { saveResult, getLeaderboard };
