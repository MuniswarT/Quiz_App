import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const selectQuiz = (category) => {
        navigate(`/select-quiz?category=${category}`);
    };

    return (
        <div>
            <h1>Welcome to the Quiz App</h1>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
            <h2>Select a Quiz Category</h2>
            <button onClick={() => selectQuiz(9)}>General Knowledge</button>
            <button onClick={() => selectQuiz(21)}>Sports</button>
        </div>
    );
};

export default Home;
