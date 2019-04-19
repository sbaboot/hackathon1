import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import QUESTION_DATA from '../data/quiz-data';




class QuizApp extends Component {
  state = {
    ...this.getInitialState(this.props.totalQuestions)
  };

  static propTypes = {
    totalQuestions: PropTypes.number.isRequired
  };

  getInitialState(totalQuestions) {
    totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
    const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);

    return {
      questions: QUESTIONS,
      totalQuestions: totalQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0
        }
      }),
      step: 1,
      score: 0,
      modal: {
        state: 'hide',
        praise: '',
        points: ''
      }
    };
  }

  handleAnswerClick = (index) => (e) => {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === index;
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    if (isCorrect && e.target.nodeName === 'LI') {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = 'none';

      e.target.classList.add('right');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });

      setTimeout(() => this.showModal(tries), 750);

      setTimeout(this.nextStep, 2750);
    }

    else if (e.target.nodeName === 'LI') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });
    }
  };

  handleEnterPress = (index) => (e) => {
    if (e.keyCode === 13) {
      this.handleAnswerClick(index)(e);
    }
  };

  showModal = (tries) => {
    let praise;
    let points;

    switch (tries) {
      case 0: {
        praise = "Fier de toi disciple !";
        points = '+10 oeufs';
        break;
      }
      case 1: {
        praise = 'Bravo machine !';
        points = '+5 oeufs';
        break;
      }
      case 2: {
        praise = 'Et ça passe !';
        points = '+2 oeufs';
        break;
      }
      default: {
        praise = 'Tu feras mieux la prochaine fois...';
        points = '+1 oeuf';
      }
    }

    this.setState({
      modal: {
        state: 'show',
        praise,
        points
      }
    });
  };

  nextStep = () => {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: this.updateScore(tries, score),
      questions: restOfQuestions,
      modal: {
        state: 'hide'
      }
    });
  };

  updateScore(tries, score) {
    switch (tries) {
      case 1: return score + 10;
      case 2: return score + 5;
      case 3: return score + 2;
      default: return score + 1;
    }
  }

  restartQuiz = () => {
    this.setState({
      ...this.getInitialState(this.props.totalQuestions)
    });
  };

  setSeconds = (seconds) => {
    console.log(seconds)
    this.setState({
      seconds: seconds
    })
  }

  render() {
    const { step, questions, userAnswers, totalQuestions, score, modal, seconds } = this.state;
    const { value } = this.props;
    if (step >= totalQuestions + 1) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
          seconds={seconds}
          value={value}
        />
      );
    } else return (
      <Fragment>
        <img
          src={this.props.characters.image}
          alt='profilPicture'
          style={{
            position: 'fixed',
            left: '40rem',
            marginTop: '1rem',
            borderRadius: '100%',
            width: '8rem',
            height: '10rem',
            objectFit: 'cover'
          }}
        />
        <p style={{ color: 'white' }}>{this.props.value}</p>
        <Quiz
          step={step}
          questions={questions}
          totalQuestions={totalQuestions}
          score={score}
          handleAnswerClick={this.handleAnswerClick}
          handleEnterPress={this.handleEnterPress}
          setSeconds={this.setSeconds}
        />
        {modal.state === 'show' && <Modal modal={modal} />}
      </Fragment>
    );
  }
}

export default QuizApp;
