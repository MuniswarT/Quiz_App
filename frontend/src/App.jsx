import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import QuizProvider from "./context/QuizContext";

function App() {
    return (
        <QuizProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
                    <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
                    <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
                </Routes>
            </Router>
        </QuizProvider>
    );
}

export default App;
