import React from 'react';
import styles from './Question.module.css'

const Question = ({
  question,
  questionNumber,
  selectedOption,
  onOptionChange,
  onNextQuestion,
  onSubmitTest,
  isLastQuestion,
  time,
  isTimeUp,
}) => {
    
  return (
    <div >
      <h2 className={styles.questionNumber}>Question {questionNumber}</h2>
      <p className={styles.question}>{question.Question}</p>
      <div>
        {question.Options.map((option, index) => (
          <div key={index}>
            <input
            className={styles.container}
              type="radio"
              id={`option${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
            />
            <label htmlFor={`option${index}`} >{option}</label>
          </div>
        ))}
      </div>
      <button className={styles.btn} onClick={isLastQuestion ? onSubmitTest : onNextQuestion}>{isLastQuestion ? 'Submit' : 'Next'}</button>
      <p className={styles.time}>Time remaining: {time}</p>
      {isTimeUp && <p>Time's up! Test submitted automatically.</p>}
    </div>
  );
};

export default Question;
