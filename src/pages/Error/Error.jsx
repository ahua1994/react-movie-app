import "./Error.scss";
import boo from "../../images/boo.jpg";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    return (
        <div className="Error">
            <img src={boo} alt="boo" />
            <h1>It seems you're lost...</h1>
            <Button onClick={() => navigate("/")} color="success">
                Get Me Out!
            </Button>
        </div>
    );
}

export default Error;
