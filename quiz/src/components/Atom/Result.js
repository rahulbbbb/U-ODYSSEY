import React from 'react';
import style from './Result.module.css'

const Result = ({ score, totalQuestions, isPassed, onRestartTest }) => {
  return (
    <div>
      <h2 className={style.result}>Result</h2>
      <p className={style.resultData}>Your score: {score} out of {totalQuestions * 2}</p>
      {isPassed ? (
        <p className={style.resultWish}>Congratulations! You passed the test!</p>
      ) : (
        <button className={style.restartBtn} onClick={onRestartTest}>Restart Test</button>
      )}
    </div>
  );
};

export default Result;
