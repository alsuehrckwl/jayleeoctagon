import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from 'static/images/logo/logo.jpg';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="navbar static-top">
        <div className="container">
          <Link to={`/`} className="navbar-brand">
            <img className="logo" src={LogoImage} />
          </Link>
          <Link to={`/schedule`}>스케쥴</Link>
          <Link to={`/reservation`}>예약</Link>
          <Link to={`/guest`}>게스트</Link>
          <Link to={`/guest`}>위치</Link>
        </div>
      </nav>
    );
  }
}
