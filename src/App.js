import React, { Component } from 'react';
import QuizApp from './components/QuizApp';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: {}
    };
    this.chooseYourCharacter = this.chooseYourCharacter.bind(this);
  }

  componentDidMount() {
    this.chooseYourCharacter()
  }
  chooseYourCharacter() {
    fetch("http://easteregg.wildcodeschool.fr/api/characters/random", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Quiz" render={props => <QuizApp {...props} totalQuestions={5} characters={this.state.characters} />} />
          <Route path="/" render={props => <Home {...props} characters={this.state.characters} chooseYourCharacter={this.chooseYourCharacter} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
