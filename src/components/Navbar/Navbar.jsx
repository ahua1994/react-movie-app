import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Button } from "reactstrap";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../firebase";

function Navbar() {
    const navigate = useNavigate();
    let { currentUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logout(currentUser);
        navigate("/login");
    };
    return (
        <div className="Navbar">
            <div className="title" onClick={() => navigate("/")}>
                {currentUser ? (
                    <h3>Welcome, {currentUser.displayName}</h3>
                ) : (
                    <h3>React Theatre App</h3>
                )}
            </div>

            <div className="buttons">
                {currentUser ? (
                    <Button onClick={handleLogOut}>Logout</Button>
                ) : (
                    <>
                        <Button className="mx-2" onClick={() => navigate("/login")}>
                            Login
                        </Button>
                        <Button onClick={() => navigate("/register")}>Register</Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
