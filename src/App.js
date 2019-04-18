import React, { Component } from 'react';
import QuizApp from './components/QuizApp';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Quiz" render={props => <QuizApp {...props} totalQuestions={5} />} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
