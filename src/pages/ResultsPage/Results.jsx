import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QUESTIONS from '../../context/Context';
import Styles from './Results.module.css';

function Results() {
  const { quiz, ansTracker, setAnswerTracker } = useContext(QUESTIONS);

  return (
    <div className={Styles.results}>
      <header className={Styles.header1}>Results</header>
      <div className={Styles.resultsnum}>
        <p>passed: {ansTracker.passed}</p>
        <p>failed: {ansTracker.failed}</p>
      </div>
      <div className={Styles.result__container}>
        {quiz.map((user) => (
          <div className={Styles.result__content}>
            <div className={Styles.questions__results}>
              <p> .{user.question.replace(/[^a-zA-Z0-9 ]/g, '')}</p>
              <p className={Styles.correctan}>Answer:{user.correct_answer}</p>
            </div>
          </div>
        ))}
        <div className={Styles.btn__holder}>
          <Link to="/">
            <button
              className={Styles.back}
              type="button"
              onClick={() => {
                setAnswerTracker({ passed: 0, failed: 0 });
              }}
            >
              Exit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
