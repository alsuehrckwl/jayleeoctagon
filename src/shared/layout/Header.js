import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from 'static/images/logo/logo-main.png';
import autobind from 'autobind-decorator';

@autobind
export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      hamburger: false,
    };
  }

  toggleHamburgerMenu() {
    this.setState({
      hamburger: !this.state.hamburger,
    });
  }

  render() {
    const { hamburger } = this.state;
    return (
      <nav className="navbar static-top">
        <div className="navbar__hamburger">
          <div
            className={`wrapper-menu ${hamburger ? 'open' : ''}`}
            onClick={this.toggleHamburgerMenu}
          >
            <div className="line-menu half start" />
            <div className="line-menu" />
            <div className="line-menu half end" />
          </div>
        </div>
        <div className="navbar__logo">
          <Link to={`/`} className="navbar-brand">
            <img className="logo" src={LogoImage} />
          </Link>
        </div>
        {/* <div className="navbar__menu">
          <Link to={`/schedule`}>스케쥴</Link>
          <Link to={`/reservation`}>예약</Link>
          <Link to={`/guest`}>게스트</Link>
          <Link to={`/guest`}>위치</Link>
        </div> */}
      </nav>
    );
  }
}
