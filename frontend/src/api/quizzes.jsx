import axios from "axios";

const API_URL = "http://localhost:8000/api/quizzes";

export const fetchQuizzes = async () => {
    const token = localStorage.getItem("token");
    return await axios.get(`${API_URL}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
