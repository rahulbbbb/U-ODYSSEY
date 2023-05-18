import React, { useState, useEffect } from 'react';
import Question from '../Molecule/Question';
import Result from '../Atom/Result';
import styles from './Quiz.module.css'

const questionsData = [
  {
    Question: 'Which city is known as the "Pink City" of India?',
    Options: ['Jaipur', 'Mumbai', 'Delhi', 'Kolkata'],
    CorrectAnswer: 'Jaipur',
  },
  {
    Question: 'Who is the current Prime Minister of India?',
    Options: ['Narendra Modi', 'Rahul Gandhi', 'Arvind Kejriwal', 'Amit Shah'],
    CorrectAnswer: 'Narendra Modi',
  },
  {
    Question: 'What is the national animal of India?',
    Options: ['Tiger', 'Lion', 'Elephant', 'Peacock'],
    CorrectAnswer: 'Tiger',
  },
  {
    Question: 'Which river is also known as the "Ganga" in India?',
    Options: ['Yamuna', 'Brahmaputra', 'Godavari', 'Hooghly'],
    CorrectAnswer: 'Yamuna',
  },
  {
    Question: 'Who is known as the "Father of the Indian Constitution"?',
    Options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'B.R. Ambedkar', 'Subhash Chandra Bose'],
    CorrectAnswer: 'B.R. Ambedkar',
  },
  {
    Question: 'What is the currency of India?',
    Options: ['Rupee', 'Dollar', 'Euro', 'Pound'],
    CorrectAnswer: 'Rupee',
  },
  {
    Question: 'Which is the highest civilian award in India?',
    Options: ['Bharat Ratna', 'Padma Bhushan', 'Padma Vibhushan', 'Padma Shri'],
    CorrectAnswer: 'Bharat Ratna',
  },
  {
    Question: 'Who was the first President of India?',
    Options: ['Rajendra Prasad', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', ' Indira Gandhi'],
    CorrectAnswer: 'Rajendra Prasad',
  },
  {
    Question: 'Which Indian state is known as the "Land of the Rising Sun"?',
    Options: ['Assam', 'Arunachal Pradesh', 'Mizoram', 'Manipur'],
    CorrectAnswer: 'Arunachal Pradesh',
  },
  {
    Question: 'Which city is home to the famous "Taj Mahal"?',
    Options: ['Jaipur', 'Agra', 'Varanasi', 'Jaisalmer'],
    CorrectAnswer: 'Agra',
  },
  
];

const Quiz= () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (isStarted && !isSubmitted) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isSubmitted]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questionsData[currentQuestion].CorrectAnswer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setSelectedOption('');

    if (currentQuestion === questionsData.length - 1) {
      setIsSubmitted(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleSubmitTest = () => {
    const correctAnswer = questionsData[currentQuestion].CorrectAnswer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setIsSubmitted(true);
  };

  const handleRestartTest = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setIsSubmitted(false);
    setIsPassed(false);
    setIsStarted(false);
    setTime(10 * 60);
  };

  useEffect(() => {
    if (isSubmitted) {
      if (score >= 12) {
        setIsPassed(true);
      }
    }
  }, [isSubmitted, score]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1 className={styles.title}>QUIZ</h1>
      {!isStarted ? (
        <button className={styles.startBtn} onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <div>
          {isSubmitted ? (
            <Result score={score} totalQuestions={questionsData.length} isPassed={isPassed} onRestartTest={handleRestartTest} />
          ) : (
            <Question
              question={questionsData[currentQuestion]}
              questionNumber={currentQuestion + 1}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              onNextQuestion={handleNextQuestion}
              onSubmitTest={handleSubmitTest}
              isLastQuestion={currentQuestion === questionsData.length - 1}
              time={formatTime(time)}
              isTimeUp={time === 0}
            />
          )}
          {time === 0 && !isSubmitted && (
            <div>
              <p>Time's up! Test submitted automatically.</p>
              <Question
                question={questionsData[currentQuestion]}
                questionNumber={currentQuestion + 1}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
                onNextQuestion={handleNextQuestion}
                onSubmitTest={handleSubmitTest}
                isLastQuestion={currentQuestion === questionsData.length - 1}
                time={formatTime(time)}
                isTimeUp={true}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
