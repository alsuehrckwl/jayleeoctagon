import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <a className="btn btn-primary" href="#">Sign In</a>
          </div>
        </nav>
    );
  }
}
