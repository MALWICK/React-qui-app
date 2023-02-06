import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import QUESTIONS from '../../context/Context';
import Styles from './Questions.module.css';

function Questions() {
  const { id } = useParams();
  const changeId = parseInt(id, 10);
  const { quiz, handleBtnClick } = useContext(QUESTIONS);

  return (
    <div>
      {quiz.length > 0 && ( // here we are actually saying that we are fetching all the questions with the state quiz and its value by defualt is 0, so we saying that if the array length of questions is greather than 0 it show display the lenght of the array
        <div className={Styles.questions}>
          <h1>questions</h1>
          <div className={Styles.questions__content}>
            <div className={Styles.questions__numbers}>
              <h4>Questions number:{id}</h4>
            </div>
            <p key={quiz.question}>
              {quiz[changeId].question.replace(/[^a-zA-Z0-9 ]/g, '')}
            </p>
            <section className={Styles.btnholder}>
              <div className={Styles.truebtn}>
                <Link
                  to={
                    changeId === 9 ? '/results' : `/questions/${changeId + 1}` // hrer at this level we are keeping the
                  }
                >
                  <button
                    type="button"
                    className={Styles.truebtn__btn}
                    onClick={(e) => {
                      handleBtnClick(e, quiz[changeId].correct_answer);
                    }}
                    value="True"
                  >
                    True
                  </button>
                </Link>
              </div>
              <div className={Styles.falsebtn}>
                <Link
                  to={
                    changeId === 9 ? '/results' : `/questions/${changeId + 1}`
                  }
                >
                  <button
                    type="button"
                    className={Styles.falsebtn__btn}
                    onClick={(e) => {
                      // here we are getting the value of our button
                      handleBtnClick(e, quiz[changeId].correct_answer);
                    }}
                    value="False"
                  >
                    False
                  </button>
                </Link>
              </div>
            </section>
          </div>
          <div className={Styles.see__results}>
            <Link to="/results">
              <button type="button">see results</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Questions;
