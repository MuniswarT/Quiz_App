import axios from "axios";

const API_URL = "http://localhost:8000/api/results";

export const saveResult = async (score, totalQuestions) => {
    const token = localStorage.getItem("token");
    return await axios.post(`${API_URL}/save`, { score, totalQuestions }, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getLeaderboard = async () => {
    return await axios.get(`${API_URL}/leaderboard`);
};
