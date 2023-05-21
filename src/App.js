import './App.css';
import NotFound from "./error/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import StudentCardPage from "./pages/StudentCardPage";
import ShowDormitoryTable from "./components/showDormitoryTable";
import Login from "./components/Login";
import CreateStudentCard from "./components/CreateStudentCard";
import SearchDormitory from "./components/SearchDormitory";
import DormitoryPage from "./pages/DormitoryPage";
import withAuth from "./components/withAuth";

function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/cards" element={<StudentCardPage />} />
                    <Route path="/cards/create" element={<CreateStudentCard/>} />
                    <Route path="/dormitory" element={<DormitoryPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
