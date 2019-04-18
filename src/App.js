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
        <QuizApp totalQuestions={5} />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
