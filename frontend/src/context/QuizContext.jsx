import { createContext, useState } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);

    return (
        <QuizContext.Provider value={{ questions, setQuestions }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider;
