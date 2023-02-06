/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import About from './pages/About/About';
import Questions from './pages/QuestionsPage/Questions';
import Results from './pages/ResultsPage/Results';
import QUESTIONS from './context/Context';

function App() {
  const [ansTracker, setAnswerTracker] = useState({
    passed: 0,
    failed: 0,
    skipped: 0,
  });
  const [quiz, setQuiz] = useState([]);
  const fetchQuizQuestions = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    return setQuiz([...data.results]);
  };
  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const handleBtnClick = (e, correctAnswer) => {
    const val = e.target.value;
    if (val === correctAnswer) {
      setAnswerTracker({
        skipped: ansTracker.skipped,
        passed: ansTracker.passed + 1,
        failed: ansTracker.failed,
      });
    } else if (val !== correctAnswer) {
      setAnswerTracker({
        skipped: ansTracker.skipped,
        passed: ansTracker.passed,
        failed: ansTracker.failed + 1,
      });
    } else {
      setAnswerTracker({
        skipped: ansTracker.skipped + 1,
        passed: ansTracker.passed,
        failed: ansTracker.failed,
      });
    }
  };
  return (
    <div className="App">
      <QUESTIONS.Provider
        value={{ quiz, handleBtnClick, ansTracker, setAnswerTracker }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<About />} />
            <Route path="/questions/:id" element={<Questions />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </QUESTIONS.Provider>
    </div>
  );
}

export default App;
