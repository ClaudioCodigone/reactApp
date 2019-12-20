import React, { Component } from 'react';
import Button from './components/Button.js';
import circledArrow from './circled-right-2.png';
import Header from './components/Header.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/MYtineraryLogo.png";


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
        <div className="App text-center">
          <Header />
          <header className="App-header">
            <img src={logo} className="w-50"></img>
            <p className="font-weight-bold">
              Find your perfect trip, designed by<br >
              </br>insiders who know and love their cities.
        </p>
          </header>
          <main>
            <div className="mt-5 mb-5" >
              <h3>Start Browsing:</h3>
              <Button url="/Cities" className="img-fluid w-25 m-5" image={circledArrow} altText="arrow" />
            </div>
          </main>
        </div>
    );
  }
}

export default App;

