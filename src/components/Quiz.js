import React from "react";
import PropTypes from "prop-types";
import QuestionList from "./QuestionList";
import Timer from "./Timer";

const Quiz = ({
  step,
  questions,
  totalQuestions,
  score,
  handleAnswerClick,
  handleEnterPress,
  setSeconds
}) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div className="question-number">{step}</div>
          <div className="description">
            sur <span>{totalQuestions}</span>
          </div>
        </div>

        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">oeuf(s)</div>
        </div>
      </header>

      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
      <div className="timer">
        <Timer setSeconds={setSeconds} />
      </div>
    </div>
  );
};

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Quiz;
