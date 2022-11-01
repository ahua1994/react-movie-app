import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Details from "./pages/Details/Details";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="details" element={<Details />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
