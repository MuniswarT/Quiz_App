import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Thank You for Playing! 🎉</h2>
            <p>Your Score: {state?.score} / {state?.total}</p>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/leaderboard")}>Leaderboard</button> {/* ✅ This works now */}
        </div>
    );
};

export default Results;
