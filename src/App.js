import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Memory from './components/Memory';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
       {/*  <Route path="/End" component={End} />
         <Route path="/Enigme" component={Enigme} />
        <Route path="/Pacman" component={Pacman} /> 
        <Route path="/Memory" component={Memory} /> */}
        <Route path="/" component={Home} />
      </Switch>
      </div>
    );
  }
}

export default App;
