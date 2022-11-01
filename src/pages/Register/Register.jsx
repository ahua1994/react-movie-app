import "./Register.scss";
import { Button, Form, Input, Label } from "reactstrap";
import theatre from "../../images/theatre.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser, signUpProvider } from "../../firebase";

function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async () => {
        if (!email || !password || !name) {
            setErr("Invalid Entry");
            return;
        }
        const message = await registerUser(email, password, name);
        if (message) {
            setErr(message);
        } else {
            setErr(null);
            navigate("/login");
        }
    };

    const providerHandler = () => {
        signUpProvider();
        navigate("/");
    };

    return (
        <div className="Register">
            <img src={theatre} alt="theatre" />
            <Form>
                <h1>Register</h1>
                {err && <p className="text-danger text-center m-3">{err} </p>}
                <Label for="name">Name</Label>
                <Input
                    onChange={e => setName(e.target.value)}
                    id="name"
                    value={name}
                    type="text"
                    placeholder="Enter Your Name"
                ></Input>
                <Label for="email">Email</Label>
                <Input
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    value={email}
                    type="email"
                    placeholder="Enter Your Email"
                ></Input>
                <Label for="password">Password</Label>
                <Input
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    value={password}
                    type="password"
                    placeholder="Enter Your Password"
                ></Input>
                <Button color="primary" onClick={submitHandler}>
                    Register New User
                </Button>
                <Button color="primary" onClick={providerHandler}>
                    Continue with Google
                </Button>
                <p className="redirect">
                    Already Registered? <span onClick={() => navigate("/login")}>Login</span>
                </p>
            </Form>
        </div>
    );
}

export default Register;
