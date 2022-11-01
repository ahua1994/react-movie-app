import "../Register/Register.scss";
import { Button, Form, Input, Label } from "reactstrap";
import theatre from "../../images/theatre.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, signUpProvider, forgetPassword } from "../../firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState(null);

    const submitHandler = async e => {
        if (!email || !password) {
            setErr("Invalid Entry");
            return;
        }
        const message = login(email, password);
        if (message) {
            setErr(message);
        } else {
            setErr(null);
            navigate("/");
        }
    };

    const providerHandler = () => {
        signUpProvider();
        navigate("/");
    };

    return (
        <div className="Login">
            <img src={theatre} alt="theatre" />
            <Form>
                <h1>Login</h1>
                {err && <p className="text-danger text-center m-3">{err} </p>}
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter Your Email"
                ></Input>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                ></Input>
                <div
                    className="text-center text-warning mt-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => forgetPassword(email)}
                >
                    Forget Password?
                </div>
                <Button color="primary" onClick={e => submitHandler(e)}>
                    Login
                </Button>
                <Button color="primary" onClick={providerHandler}>
                    Continue with Google
                </Button>
                <p className="redirect">
                    Don't Have An Account?
                    <span onClick={() => navigate("/register")}>Register</span>
                </p>
            </Form>
        </div>
    );
}

export default Login;
