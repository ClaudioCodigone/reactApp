import React from 'react';
import LoginLogo from '../assets/log-in-icon.png';

function Login() {
  return (
    <div className="dropdown text-left w-25">
      <img alt="login_ico" className="w-50" src={LoginLogo}
        id="dropdownMenuButton" 
        data-toggle="dropdown"
        aria-haspopup="true" 
        aria-expanded="false">
        </img>
      <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/UserLogin">Login</a>
        <a className="dropdown-item" href="/CreateAccount">Create Account</a>
      </div>
    </div>
    );
};

export default Login;
