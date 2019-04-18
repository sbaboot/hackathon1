import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../style.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: {}
    };
  }

  componentDidMount() {
    let eggId;
    if (this.props.score >= 50) {
      eggId = '5cac51240d488f0da6151bf1';
    } else if (this.props.score >= 40) {
      eggId = '5cac51240d488f0da6151c0e';
    } else if (this.props.score >= 30) {
      eggId = '5cac51240d488f0da6151bff';
    } else if (this.props.score >= 20) {
      eggId = '5cac51240d488f0da6151bf3';
    } else if (this.props.score >= 10) {
      eggId = '5cac51240d488f0da6151c27';
    } else if (this.props.score >= 5) {
      eggId = '5cac51240d488f0da6151bf9';
    } else {
      eggId = '5cac51240d488f0da6151bea';
    }

    axios(`http://easteregg.wildcodeschool.fr/api/eggs/${eggId}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          eggs: data
        });
      });
  }

  render() {
    const { eggs } = this.state;
    return (
      <div className="results-container">
        <h2>Resultat du quiz</h2>
        <img src={eggs.image} alt="eggs" />
        <div>Tu as gagné un {eggs.name}</div>
        <div className="results-total">Tu as <strong>{this.props.score}</strong> oeufs au total !</div>
        <a onClick={this.props.restartQuiz}>Recommencer la chasse aux oeufs !</a>
      </div>
    );
  }
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
