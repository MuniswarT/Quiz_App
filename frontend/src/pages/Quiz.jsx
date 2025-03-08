import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuizzes } from "../api/quizzes";
import { saveResult } from "../api/results";

const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const limit = params.get("limit");

    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadQuiz = async () => {
            setLoading(true);
            setError(null);
            const data = await fetchQuizzes(category, limit);
            if (data.length > 0) {
                setQuestions(data);
            } else {
                setError("Failed to load quiz questions.");
            }
            setLoading(false);
        };

        loadQuiz();
    }, [category, limit]);

    const handleSelectAnswer = (questionIndex, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
    };

    const handleSubmitQuiz = async () => {
        let score = 0;
        questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.correct_answer) {
                score += 1;
            }
        });

        try {
            await saveResult(score, questions.length);
            navigate("/results", { state: { score, total: questions.length } });
        } catch (error) {
            console.error("Error submitting quiz:", error);
        }
    };

    if (loading) return <h2>Loading quiz...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div>
            <h2>Quiz Questions</h2>
            {questions.map((q, index) => (
                <div key={index}>
                    <p>{q.question}</p>
                    <ul>
                        {[...q.incorrect_answers, q.correct_answer]
                            .sort()
                            .map((answer, i) => (
                                <li key={i}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={answer}
                                            onChange={() => handleSelectAnswer(index, answer)}
                                            checked={selectedAnswers[index] === answer}
                                        />
                                        {answer}
                                    </label>
                                </li>
                            ))}
                    </ul>
                </div>
            ))}

            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
        </div>
    );
};

export default Quiz;
