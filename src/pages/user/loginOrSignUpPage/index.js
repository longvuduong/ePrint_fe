import React, { useRef, useState } from 'react';
import './style.scss';
import axios from 'axios';

const LoginPage = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const wrapperRef = useRef(null);
  const signUp = async event => {
    event.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, {
        name: userName,
        email: email,
        password: password,
      });

      if (res.data.status === 'OK') {
        handleSignInClick();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error);
    }
  };
  const signIn = async event => {
    event.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, {
        email: email,
        password: password,
      });

      if (res.data.status === 'OK') {
        const userData = {
          email: email,
          accessToken: res.data.access_token,
          refreshToken: res.data.refresh_token,
          isAdmin: res.data.isAdmin,
        };

        localStorage.setItem('user', JSON.stringify(userData));

        const searchRes = await axios.get(`${process.env.REACT_APP_API_URL}/user/get-details-by-email`, {
          params: {
            email: email,
          },
        });

        if (searchRes.data.status === 'OK') {
          userData.name = searchRes.data.data.name;
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          console.error('Error occurred while searching user by email:', searchRes.data.message);
        }

        window.location.href = '/';
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error);
    }
  };

  const handleSignInClick = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('animate-signUp');
      wrapperRef.current.classList.remove('animate-signIn');
    }
  };
  const handleSignUpClick = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('animate-signIn');
      wrapperRef.current.classList.remove('animate-signUp');
    }
  };
  return (
    <div className="login-background">
      <div className="wrapper" ref={wrapperRef}>
        <div className="form-wrapper sign-up">
          <form action="">
            <h2 className="login-title">Sign Up</h2>
            <div className="input-group">
              <input type="text" required value={userName} onChange={e => setUserName(e.target.value)} />
              <label htmlFor=""> Username</label>
            </div>
            <div className="input-group">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
              <label htmlFor="">Email</label>
            </div>
            <div className="input-group">
              <input type="password" required value={password} onChange={e => setPassWord(e.target.value)} />
              <label htmlFor=""> Password</label>
            </div>
            <button type="submit" className="btn" onClick={signUp}>
              Sign Up
            </button>
            <div className="sign-link">
              <p>
                {' '}
                Already have an account?
                <a href="#" className="signIn-link" onClick={handleSignInClick}>
                  {' '}
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-wrapper sign-in">
          <form action="">
            <h2 className="login-title">Login</h2>
            <div className="input-group">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
              <label htmlFor=""> Email</label>
            </div>
            <div className="input-group">
              <input type="password" required value={password} onChange={e => setPassWord(e.target.value)} />
              <label htmlFor=""> Password</label>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password ?</a>
            </div>

            <button type="submit" className="btn" onClick={signIn}>
              Login
            </button>

            <div className="sign-link">
              <p>
                {' '}
                Don't have an account?
                <a href="#" className="signUp-link" onClick={handleSignUpClick}>
                  {' '}
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
