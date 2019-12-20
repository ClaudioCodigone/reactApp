import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
const QUOTE_SERVICE_URL = "http://localhost:5000";
const HOME_URL = "http://localhost:3000";
const responseGoogle = response => {
        window.location.href = `${HOME_URL}`;
  }
const responseFailGoogle = response => {
  console.log("login failed")
}
const logout = resp => {  
  console.log("logged out")
}

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    const loginData = this.state.email;
    console.log("logindata:", loginData);
    axios
      .post(`${QUOTE_SERVICE_URL}/auth/login`, { "email": loginData})
      .then(res => {
        console.log("respuesta del post de login es", res.data);
      })
      .catch(e => console.log(e));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form
          className="form-signin w-75 text-center m-auto"
          onSubmit={this.handleSubmit}
        >
          <img
            className="mb-4"
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required=""
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <GoogleLogin
            className="m-3"
            clientId="967321683835-m3mcc90mlehv5g4jqhk5n99s7e674ii5.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseFailGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <GoogleLogout
            className="m-3"
            clientId="967321683835-m3mcc90mlehv5g4jqhk5n99s7e674ii5.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            onFailure={console.log("Logout failed!")}
          ></GoogleLogout>
        </form>
      </div>
    );
  }
}

export default UserLogin;
