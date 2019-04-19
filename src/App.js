import React, { Component } from 'react';
import QuizApp from './components/QuizApp';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import './style.css';
import NameForm from './components/NameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: {},
      value: '',
    };
    this.chooseYourCharacter = this.chooseYourCharacter.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
          <Route path="/Quiz" render={props => <QuizApp {...props} totalQuestions={1} characters={this.state.characters} value={this.state.value} />} />
          <Route path="/" render={props => <Home {...props} characters={this.state.characters} chooseYourCharacter={this.chooseYourCharacter} />} />
        </Switch>
      </div >
    );
  }
}

export default App;
