import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./Navbar.scss";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="Navbar">
            <div className="title" onClick={() => navigate("/")}>
                <h3>React Theatre App</h3>
            </div>
            <div className="buttons">
                <Button className="mx-2" onClick={() => navigate("/login")}>
                    Login
                </Button>
                <Button onClick={() => navigate("/register")}>Register</Button>
            </div>
        </div>
    );
}

export default Navbar;
