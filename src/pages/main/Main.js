import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Welcome to the club OCTAGON!</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <h1 className="mb-5">Guest 신청 문의</h1>
                <a
                  href="tel:010-2888-0756"
                  className="btn btn-block btn-lg btn-warning"
                >
                  010 - 2888 - 0756
                  <br /> 클릭하면 연결됩니다.
                </a>
                {/* <form>
                        <div className="form-row">
                            <div className="col-12 col-md-9 mb-2 mb-md-0">
                            <input type="email" className="form-control form-control-lg" placeholder="Enter your email..."/>
                            </div>
                            <div className="col-12 col-md-3">
                            <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                            </div>
                        </div>
                        </form> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
