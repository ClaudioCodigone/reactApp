import React, { Component } from 'react';
import { saveUserDataEnd } from '../reducers/reducer'
import { connect } from "react-redux";
import axios from "axios";
const QUOTE_SERVICE_URL = "http://localhost:5000";
const HOME_URL = "http://localhost:3000";


class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const element = event.target;
    const elementVal = element.value;
    switch (element.name) {
      case 'first_name':
        this.setState({ firstName: elementVal });
        break;
      case 'last_name':
        this.setState({ lastName: elementVal });

        break;
      case 'email':
        this.setState({ email: elementVal });
        break;
      case 'password':
        this.setState({ password: elementVal });
        break;
      case 'password_confirmation':
        this.setState({ confirmPassword: elementVal });

        break;
      default:
    }
  }

  handleSubmit(event) {

    const userData = this.state
    axios
      .post(`${QUOTE_SERVICE_URL}/saveUser`, userData)
      .then(res => {
        console.log('respuesta del post de crear usuario', res.data);
        this.props.saveUserDataEnd(res.data);
        window.location.href = `${HOME_URL}/UserLogin`;
      })
      .catch(e => console.log(e));
    event.preventDefault();
  }

  render() {
    return (

      <div className="m-auto w-100">
          <div className="text-center m-auto">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title p-3">Sign up for MYtinerary</h3>
                </div>
                  <form role="form" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <input type="submit" value="Register" className="btn btn-info btn-block" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
    )
  }
}
const mapDispatchToProps = { saveUserDataEnd };

export default connect(null, mapDispatchToProps)(CreateAccount);
