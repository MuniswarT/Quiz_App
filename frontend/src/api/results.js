import axios from "axios";

const API_URL = "http://localhost:8000/api/results";

export const getLeaderboard = () => axios.get(`${API_URL}/leaderboard`);

export const saveResult = (score, totalQuestions) => {
    const token = localStorage.getItem("token");
    return axios.post(
        `${API_URL}/save`,
        { score, totalQuestions },
        { headers: { Authorization: `Bearer ${token}` } }
    );
};
