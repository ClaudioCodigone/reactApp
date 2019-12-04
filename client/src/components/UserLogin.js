import React from 'react';
import axios from "axios";
const QUOTE_SERVICE_URL = "http://localhost:5000";
const HOME_URL = "http://localhost:3000";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googlePath = this.googlePath.bind(this);

  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    const loginData = this.state.email;
    console.log('logindata:', loginData);
    axios
      .post(`${QUOTE_SERVICE_URL}/auth/login`, loginData)
      .then(res => {
        console.log('respuesta del post de login es', res.data);
      })
      .catch(e => console.log(e));
    event.preventDefault();
  }

  googlePath() {
    let path = `googleLogin`;
    this.props.history.push(path);
    console.log("asdasd");
  }

  render() {
    return (
      <div>
        <form className="form-signin w-75 text-center m-auto" onSubmit={this.handleSubmit}>
          <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="Email address" required="" value={this.state.email} onChange={this.handleChange} />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
        </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <button className="btn btn-info btn-block mt-50" href='/googleLogin'>Sign with google</button>

        </form>
      </div >
    );
  }
}

export default UserLogin;


