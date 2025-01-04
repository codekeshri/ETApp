import './Auth.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [passwordEmail, setPasswordEmail] = useState('');
  const navigate = useNavigate();

  const emailInputHandler = e => {
    setEmail(e.target.value);
  };

  const usernameInputHandler = e => {
    setUsername(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const url = !isSignup ? import.meta.env.VITE_SIGNUP : import.meta.env.VITE_LOGIN;

  const signupHandler = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });

      toast.success(res.message);
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (error) {
      if (error.response) {
        toast.error(error.message);
        console.error('Error if:', error.response.data.error.message, error.response.data);
      } else {
        console.error('Error else:', error.message);
      }
    }
  };

  const signinHandler = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      toast.success('You logged in successfully');
      localStorage.setItem('idToken', res.data.idToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('localId', res.data.localId);
      navigate('/home');
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (error) {
      if (error.response) {
        toast.error(error.message);
        console.error('Error during sign up:', error.response.data.error.message);
      } else {
        toast.error(error.message);
        console.error('Error during sign up:', error.message);
      }
    }
  };

  const linkToggle = e => {
    e.preventDefault();
    setIsSignup(!isSignup);
  };

  const forgotPasswordHandler = async e => {
    e.preventDefault();
    console.log(passwordEmail);
    const payload = {
      requestType: 'PASSWORD_RESET',
      email: passwordEmail,
    };
    const url = import.meta.env.VITE_PASSWORD_RESET;
    try {
      await axios.post(url, payload);
      toast.success('Mail sent to your email for password reset');
    } catch (error) {
      if (error.response) {
        toast.error(error.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  const passwordEmailInputHandler = async e => {
    e.preventDefault();
    setPasswordEmail(e.target.value);
  };

  return (
    <div className="container">
      <h5>Expense Tracker App</h5>
      <div className="signup">
        {isSignup && <input type="text" className="input" onChange={usernameInputHandler} placeholder="username" value={username} />}
        <br />
        <input type="text" className="input" onChange={emailInputHandler} placeholder="your email" value={email} />
        <br />
        <input type="text" className="input" onChange={passwordHandler} placeholder="password" value={password} />
        <br />
        <br />
        <button className="input btn btn-outline-secondary" onClick={isSignup ? signupHandler : signinHandler}>
          {isSignup ? 'Register' : 'Login'}
        </button>
        <br />
        {!isSignup && (
          <a href="" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">
            Forgot Password
          </a>
        )}
        <br />
        <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" role="dialog" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="forgotPasswordModalLabel">
                  Reset Password
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="" className="form-group">
                  <input type="text" className="form-control" placeholder="Enter email" onChange={passwordEmailInputHandler} value={passwordEmail} />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={forgotPasswordHandler}>
                  Send Password Reset Link
                </button>
              </div>
            </div>
          </div>
        </div>
        <a href="http://localhost:5173/" onClick={linkToggle}>
          {isSignup ? 'Click here to Login' : 'Click here to Signup'}
        </a>
      </div>
    </div>
  );
};

const Auth = () => {
  return (
    <div>
      <Signup />
      <Toaster />
    </div>
  );
};
export default Auth;
