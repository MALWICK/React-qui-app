import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './About.module.css';

function About() {
  return (
    <div className={Styles.About}>
      <div className={Styles.About__container}>
        <h1 className={Styles.About__title}>How does it work</h1>
        <hr />
        <h4>General</h4>
        <p>
          This App test the general aptitude of players, thats is general
          knowledge, culture , sports and politics accross the globe.
        </p>
        <br />
        <h4 className={Styles.step1}>Step1</h4>
        <p>
          inorder to play this game you will have to press the next button to
          move to the quiz section.
        </p>
        <br />
        <h4 className={Styles.g__instructions}>Games INstructions</h4>
        <p>In the Quiz section,</p>
        <p>
          A set of 10 questions shall be asked and you can only answer these by
          clicking on the true or false button
        </p>
        <div className={Styles.questions__route_link}>
          <Link to="/questions/0">
            <button type="button" className={Styles.nxtbtn}>
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
