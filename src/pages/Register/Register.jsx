import "./Register.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Button, Form, Input, Label } from "reactstrap";
import theatre from "../../images/theatre.jpg";
import { useNavigate } from "react-router-dom";

function Register() {
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then(userCredential => {
    //         // Signed in
    //         const user = userCredential.user;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    const navigate = useNavigate();

    return (
        <div className="Register">
            <img src={theatre} alt="theatre" />
            <Form>
                <h1>Register</h1>
                <Label for="name">Name</Label>
                <Input id="name" value type="text" placeholder="Enter Your Name"></Input>
                <Label for="email">Email</Label>
                <Input id="email" value type="email" placeholder="Enter Your Email"></Input>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    value
                    type="password"
                    placeholder="Enter Your Password"
                ></Input>
                <Button color="primary">Register New User</Button>
                <Button color="primary">Continue with Google</Button>
                <p className="redirect">
                    Already Registered? <span onClick={() => navigate("/login")}>Login</span>
                </p>
            </Form>
        </div>
    );
}

export default Register;
