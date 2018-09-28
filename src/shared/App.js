import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from 'components/NoMatch';
import Guest from '../pages/guest/Guest';
import Header from './layout/Header';
import Main from '../pages/main/Main';
import Auth from '../pages/upload/Auth';
import Upload from '../pages/upload/Upload';
import Schedule from '../pages/schedule/Schedule';
import Reservation from '../pages/reservation/Reservation';

export default class App extends Component {
  constructor() {
    super();
    // fire();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/guest" component={Guest} />
          <Route path="/jaylee" component={Auth} />
          <Route path="/upload" component={Upload} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
