import React, { Component } from "react";
import LogIn from "./LogIn";

export default class Header extends Component {
  render() {
    return (
      <div className="w-100 m-0 p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
          <LogIn />
          <div className="text-center">
              <h2 className="text-center text-white">
                  MYtinerary
              </h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cities">
                  Cities
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
