import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import FirstPage from './FirstPage'
// import SecondPage from './SecondPage'
import { FirstPage, SecondPage } from 'pages'
import NoMatch from 'components/NoMatch'
import { fire } from './Firebase';
import Guest from '../pages/guest/Guest';
import Header from "./layout/Header";
import Main from '../pages/main/Main';
import Auth from '../pages/upload/Auth';

export default class App extends Component {

  constructor() {
    super();
    fire();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/guest" component={Guest}/>
          <Route path="/jaylee" component={Auth}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
