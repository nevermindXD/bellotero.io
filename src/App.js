import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {Principal,Abc} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route path="/test" component={Abc}/>
        </Switch>
      </main>
    );
  }
}

export default App;
