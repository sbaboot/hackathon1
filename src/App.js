import React, { Component } from 'react';
import QuizApp from './components/QuizApp';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizApp totalQuestions={10} />
      </div>
    );
  }
}

export default App;
