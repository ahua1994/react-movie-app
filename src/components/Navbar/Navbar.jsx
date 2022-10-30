import { Button } from "reactstrap";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="title">
                <h3>React Theatre App</h3>
            </div>
            <div className="buttons">
                <Button className="mx-2">Login</Button>
                <Button>Register</Button>
            </div>
        </div>
    );
}

export default Navbar;
