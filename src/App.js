import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {Principal} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Principal} />
        </Switch>
      </main>
    );
  }
}

export default App;
