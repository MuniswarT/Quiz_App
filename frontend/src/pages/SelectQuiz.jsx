import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SelectQuiz = () => {
    const [limit, setLimit] = useState(5);
    const navigate = useNavigate();
    const category = new URLSearchParams(useLocation().search).get("category");

    const startQuiz = () => {
        navigate(`/quiz?category=${category}&limit=${limit}`);
    };

    return (
        <div>
            <h2>Select Number of Questions</h2>
            <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} min="1" max="20" />
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};

export default SelectQuiz;
