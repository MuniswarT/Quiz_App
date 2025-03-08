import { useState, useEffect } from "react";
import { getLeaderboard } from "../api/results";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const loadLeaderboard = async () => {
            try {
                const response = await getLeaderboard();
                setLeaderboard(response.data);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };
        loadLeaderboard();
    }, []);

    return (
        <div>
            <h2>🏆 Leaderboard</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Total Questions</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.length === 0 ? (
                        <tr><td colSpan="4">No scores yet!</td></tr>
                    ) : (
                        leaderboard.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.user.name}</td>
                                <td>{entry.score}</td>
                                <td>{entry.totalQuestions}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default Dashboard;
