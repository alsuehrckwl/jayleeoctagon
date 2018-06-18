import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import FirstPage from './FirstPage'
// import SecondPage from './SecondPage'
import { FirstPage, SecondPage } from 'pages'
import NoMatch from 'components/NoMatch'
import { fire } from './Firebase';
import Layout from './layout/Layout';

export default class App extends Component {

  constructor() {
    super();
    fire();
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Layout}/>
          <Route path="/second" component={SecondPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
