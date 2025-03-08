import { useState, useEffect } from "react";
import { fetchQuizzes } from "../api/quizzes";
import { saveResult } from "../api/results";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const response = await fetchQuizzes();
                setQuestions(response.data);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        };
        loadQuestions();
    }, []);

    const handleSelectAnswer = (index, selectedAnswer) => {
        setAnswers({ ...answers, [index]: selectedAnswer });
    };

    const handleSubmit = async () => {
        if (Object.keys(answers).length !== questions.length) {
            alert("Please answer all questions before submitting.");
            return;
        }

        let score = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correct_answer) {
                score += 1;
            }
        });

        await saveResult(score, questions.length);
        navigate("/results", { state: { score, total: questions.length, answers, questions } });
    };

    return (
        <div>
            <h2>Quiz</h2>
            {questions.map((q, index) => (
                <div key={index}>
                    <h3>{q.question}</h3>
                    <ul>
                        {[...q.incorrect_answers, q.correct_answer].sort().map((answer) => (
                            <li key={answer}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={answer}
                                        checked={answers[index] === answer}
                                        onChange={() => handleSelectAnswer(index, answer)}
                                    />
                                    {answer}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
    );
};

export default Quiz;
