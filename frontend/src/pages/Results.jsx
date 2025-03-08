import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Quiz Results</h2>
            <p>Your Score: {state?.score} / {state?.total}</p>
            <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
        </div>
    );
};

export default Results;
