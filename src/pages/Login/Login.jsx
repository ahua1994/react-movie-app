import "../Register/Register.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input, Label } from "reactstrap";
import theatre from "../../images/theatre.jpg";

// signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//         // Signed in
//         const user = userCredential.user;
//     })
//     .catch(error => {
//         console.log(error);
//     });

function Login() {
    return (
        <div className="Login">
            <img src={theatre} alt="theatre" />
            <Form>
                <h1>Login</h1>
                <Label for="email">Email</Label>
                <Input id="email" value type="email" placeholder="Enter Your Email"></Input>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    value
                    type="password"
                    placeholder="Enter Your Password"
                ></Input>
                <Button color="primary">Login</Button>
                <Button color="primary">Continue with Google</Button>
                <p className="redirect">
                    Already Registered? <span>Login</span>
                </p>
            </Form>
        </div>
    );
}

export default Login;
