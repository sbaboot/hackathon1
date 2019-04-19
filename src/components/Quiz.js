import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div className="question-number">{step}</div>
          <div className="description">sur <span>{totalQuestions}</span></div>
        </div>
        <h2 style={{ marginTop: '10rem', fontSize: '1.5rem' }}>Réponds correctement aux questions et notre gouroux te récompensera</h2>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">oeufs</div>
        </div>
      </header>

      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Quiz;
