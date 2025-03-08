import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/DashBoard"; // ✅ This is your leaderboard page
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SelectQuiz from "./pages/SelectQuiz";
import Results from "./pages/Results";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/select-quiz" element={<SelectQuiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/leaderboard" element={<Dashboard />} /> {/* ✅ Add this route */}

            {/* Protect these pages */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        </Routes>
    );
};

export default App;
