import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );

};

export default Login;