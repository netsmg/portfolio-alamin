"use client";
import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [questions, setQuestions] = useState([
    {
      question: "when was Javascript created",
      correct: "1995",
      incorrect: ["1984", "2000", "1996", "1994"]
    },
    {
      question: "react was originally created by...",
      correct: "Jordan Walke",
      incorrect: ["Kid Cudi", "Almero Steyn", "Jesse Beach", "Caleb Meredith"]
    },
    {
      question: "what vehicle manufacturer builds the 911 GT3",
      correct: "Porsche",
      incorrect: ["BMW", "Bentley", "Mercedes AMG", "McClaren"]
    },
    {
      question: "what styles a webpage",
      correct: "CSS",
      incorrect: ["HTML", "JSON", "SQL", "All"]
    },
    {
      question: "how many data types does JavaScript have",
      correct: "Seven",
      incorrect: ["Three", "Four", "Two", "Eight"]
    }
  ]);

  const [player, setPlayer] = useState({
    score: 0,
    answers: [],
  });

  const [cur, setCur] = useState(0);

  const holder = [];

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    questions.forEach((e) => {
      let temp = [];
      e.incorrect.forEach((ans) => {
        let obj = {
          response: ans,
          correct: false
        };
        temp.push(obj);
      });

      let obj = {
        response: e.correct,
        correct: true
      };
      temp.push(obj);
      let mainTemp = {
        question: e.question,
        options: temp,
        correct: e.correct
      };
      holder.push(mainTemp);
    });
    newQuestion();
  };

  const newQuestion = () => {
    if (cur >= questions.length) {
      // Handle end of quiz
      results();
    } else {
      const el = holder[cur];
      progess();

      el.options.sort(() => {
        return 0.5 - Math.random();
      });

      const capQuestion = el.question.charAt(0).toUpperCase() + el.question.slice(1);

      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        answers: [],
      }));

      el.options.forEach((option) => {
        holder.push(option);
        option.correctAnswer = el.correct;
        option.que = capQuestion;
        option.isITcorrect = option.correct;
        option.classList = "a-item";
        option.textContent = option.response;
      });
    }
  };

  const optSelect = (e) => {
    endTurn();

    if (e.isITcorrect) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        score: prevPlayer.score + 1,
        answers: [
          ...prevPlayer.answers,
          {
            que: e.que,
            res: e.textContent,
            correct: true,
            qNum: cur
          }
        ],
      }));
    } else {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        answers: [
          ...prevPlayer.answers,
          {
            que: e.que,
            res: e.textContent,
            correct: false,
            qNum: cur
          }
        ],
      }));
    }
  };

  const endTurn = () => {
    holder.forEach((el) => {
      el.removeEventListener("click", optSelect);
      el.style.backgroundColor = "#ffffff05";
      el.style.color = "#565656";
      el.style.cursor = "default";
    });
    setCur(cur + 1);

    if (cur >= questions.length) {
      // Handle end of quiz
      results();
    }
  };

  const progess = () => {
    // Implement the progress function here
  };

  const results = () => {
    console.log(player.score);

    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      answers: [],
    }));

    setCur(0);

    loadQuestions();
  };

  const restartGame = () => {
    newQuestion();
  };

  return (
  <>
    <div> <div className="form-c"> <div className="qa"> <div className="q"> <h3 className="q-item" /> </div> <div className="a"> <div className="a-item start-game">Start Quiz</div> {/* 			<div class="a-item">E36 M3</div> 			<div class="a-item">E92 M3</div> 			<div class="a-item">G80 M3</div> 			<div class="a-item">F80 M3</div> */} </div> </div> <div className="progressBar"> <div className="bar"> <div className="bar-w" /> </div> <div className="next">Next Question</div> </div> </div><style dangerouslySetInnerHTML={{__html: "\n \n .form-c {\n\t height: 500px;\n\t width:100%;\n\t padding: 15px;\n\t border-radius: 12px;\n\t background-color:#1c1c23;\n\t position: relative;\n}\n .progressBar {\n\t height: 40px;\n\t width: calc(100% - 60px);\n\t padding: 10px;\n\t background-color: #131319;\n\t border-radius: 6px;\n\t position: absolute;\n\t bottom: 15px;\n\t right: 50%;\n\t transform: translate(50%, 0%);\n\t display: flex;\n\t flex-direction: row;\n\t align-items: center;\n\t overflow: hidden;\n}\n .bar {\n\t height: 11px;\n\t width: 100%;\n\t background: #e6fff4;\n\t border-radius: 100px;\n}\n .bar-w {\n\t transition: all 0.6s ease-in-out;\n\t height: 100%;\n\t width: 0%;\n\t background-color: #00ff9c;\n\t border-radius: 100px;\n}\n .next {\n\t white-space: nowrap;\n\t transform: translateX(100px);\n\t width: 0;\n\t margin-left: auto;\n\t color: #cdcdcd;\n\t cursor: pointer;\n}\n .next:hover {\n\t color: #fff;\n}\n .qa {\n\t display: flex;\n\t flex-direction: column;\n}\n .q h3 {\n\t margin: 1.2em 0;\n\t font-size: 1.4em;\n\t color:#f8f8f8;\n}\n .a {\n\t display: flex;\n\t flex-direction: column;\n}\n .a-item {\n\t padding: 18px 10px;\n\t background-color: #131417;\n\t border-radius: 5px;\n\t color: #f8f8f8;\n\t margin: 0.35em 0;\n}\n .a-item:hover {\n\t background-color:blue;\n\t transition: all 0.5s ease-in-out;\n\t cursor: pointer;\n\t color: #fff;\n}\n .progressActive {\n\t transform: translateX(0px);\n\t width: auto;\n\t transition: transform 0.6s ease-in-out;\n}\n .start-game {\n\t background-color: #ddd !important;\n\t color: #1c1c1c !important;\n\t font-size: 1em;\n}\n .result {\n\t display: flex;\n\t padding: 20px 0px;\n\t justify-content: space-between;\n\t border-bottom: 1px solid #333;\n\t color: #a0a0a0;\n\t align-items: center;\n\t flex-wrap: wrap;\n}\n .result-q {\n\t width: 200px;\n}\n " }} /> </div>
    </>
  );
};

export default QuizApp;
