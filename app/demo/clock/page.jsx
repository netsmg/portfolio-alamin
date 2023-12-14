
"use client";
import React, { useEffect, useState } from 'react';
 

const Clock = () => {
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('');
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const currentDate = new Date();
      let hour = currentDate.getHours();
      let minute = currentDate.getMinutes();
      let second = currentDate.getSeconds();
      let currentPeriod = 'AM';

      if (hour === 0) {
        hour = 12;
      }
      if (hour > 12) {
        currentPeriod = 'PM';
        hour -= 12;
      }
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;

      setTime(`${hour}:${minute}:${second}`);
      setPeriod(currentPeriod);

      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
      const currentMonth = months[currentDate.getMonth()];
      const currentDay = currentDate.getDate();
      const currentYear = currentDate.getFullYear();

      setDate(`${currentMonth} ${currentDay}, ${currentYear}`);
      setDay(currentDayOfWeek);
    };

    const intervalId = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);

  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      {/* Bubble Animation */}
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bubbles">
          {[...Array(8)].map((__, i) => (
            <span key={i} className={`one`}></span>
          ))}
        </div>
      ))}

      {/* Digital Clock */}
      <div className="clock-container">
        <div className="clock-display">
          <div id="clock">{time}</div>
          <div id="period">{period}</div>
        </div>
      </div>

      {/* Date & Day */}
      <div className="date-day-container">
        <div className="date-day-display">
          <div id="date">{date}</div>
          <div id="day">{day}</div>
        </div>
      </div>
<style dangerouslySetInnerHTML={{__html: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');\n\n* {\n margin: 0;\n padding: 0;\n font-family: 'Roboto Mono', monospace;\n}\n\nbody {\n height: 100vh;\n display: flex;\n position: relative;\n justify-content: center;\n align-items: center;\n flex-direction: column;\n background: #000;\n overflow-y: hidden;\n overflow-x: hidden;\n}\n\n/* ------------ Bubble Animation CSS Starts ------------ */\n.bubbles {\n position: absolute;\n bottom: -50%;\n display: flex;\n flex-wrap: wrap;\n gap: 50px;\n margin-top: 20px;\n width: 100vw;\n justify-content: space-around;\n animation: color-change 1.5s linear infinite;\n}\n\n.bubbles span {\n height: 60px;\n width: 60px;\n background: rgba(255, 255, 255, 0.07);\n background: linear-gradient(\n 135deg,\n #c3376393,\n #ff61d2a1,\n #fced2193,\n #92effd88,\n #38ef7e83\n );\n border-radius: 50%;\n animation: move 10s linear infinite;\n position: relative;\n overflow: hidden;\n z-index: 1;\n filter: blur(5px);\n}\n\n@media (max-width: 768px) {\n .bubbles {\n gap: 100px;\n }\n\n .bubbles span {\n height: 40px;\n width: 40px;\n }\n}\n\n@keyframes move {\n 100% {\n transform: translateY(-100vh);\n }\n}\n\n.bubbles span.one {\n animation-delay: 2.2s;\n transform: scale(2.15);\n}\n\n.bubbles span.two {\n animation-delay: 3.5s;\n transform: scale(1.55);\n}\n\n.bubbles span.three {\n animation-delay: 0.2s;\n transform: scale(0.35);\n}\n\n.bubbles span.four {\n animation-delay: 6s;\n transform: scale(2.15);\n}\n\n.bubbles span.five {\n animation-delay: 7s;\n transform: scale(0.5);\n}\n\n.bubbles span.six {\n animation-delay: 4s;\n transform: scale(2.5);\n}\n\n.bubbles span.seven {\n animation-delay: 2s;\n transform: scale(1.5);\n}\n\n.bubbles span.eight {\n animation-delay: 4s;\n transform: scale(1.5);\n}\n\n.bubbles span:before {\n content: '';\n position: absolute;\n left: 0;\n top: 0;\n height: 60px;\n width: 40%;\n transform: skew(45deg) translateX(150px);\n background: rgba(255, 255, 255, 0.4);\n animation: mirror 3s linear infinite;\n}\n\n@keyframes mirror {\n 100% {\n transform: translateX(-450px);\n }\n}\n\n.bubbles span.one:before {\n animation-delay: 1.5s;\n}\n\n.bubbles span.two:before {\n animation-delay: 3.5s;\n}\n\n.bubbles span.three:before {\n animation-delay: 2.5s;\n}\n\n.bubbles span.four:before {\n animation-delay: 7.5s;\n}\n\n.bubbles span.five:before {\n animation-delay: 4.5s;\n}\n\n.bubbles span.six:before {\n animation-delay: 0.5s;\n}\n\n.bubbles span.seven:before {\n animation-delay: 6s;\n}\n/* ------------ Bubble Animation CSS Ends ------------ */\n\n/* ------------ Digital Clock CSS Starts ------------ */\n.clock-container {\n height: 110px;\n width: 385px;\n background: linear-gradient(\n 135deg,\n #c33764,\n #ff61d2,\n #fcee21,\n #92effd,\n #38ef7d\n );\n border-radius: 10px;\n display: flex;\n justify-content: center;\n align-items: center;\n animation: color-change 2.5s linear infinite;\n}\n\n.clock-display {\n display: flex;\n justify-content: center;\n align-items: center;\n z-index: 1;\n gap: 5px;\n background: rgb(37, 15, 87);\n height: 95px;\n width: 370px;\n border-radius: 7px;\n background-color: #000;\n color: white;\n mix-blend-mode: multiply;\n}\n\n#clock,\n#period {\n text-align: center;\n line-height: 100px;\n color: #fff;\n font-size: 50px;\n font-weight: 600;\n letter-spacing: 3px;\n animation: clock 1.5s linear infinite;\n}\n\n.date-day-container {\n margin-top: 25px;\n height: 75px;\n width: 275px;\n display: flex;\n justify-content: center;\n align-items: center;\n border-radius: 15px;\n z-index: 1;\n background: black;\n border: 4px solid rgba(255, 255, 255, 0.2);\n}\n\n.date-day-display {\n display: flex;\n flex-direction: column;\n gap: 5px;\n text-transform: uppercase;\n}\n\n#date,\n#day {\n color: #fff;\n text-align: center;\n color: #fff;\n font-size: 20px;\n font-weight: 600;\n letter-spacing: 2px;\n}\n\n@keyframes color-change {\n 100% {\n filter: hue-rotate(360deg);\n }\n}\n/* ------------ Digital Clock CSS Ends ------------ */\n\n/* ------------ Credit Button CSS Starts ------------ */\n.credit-button {\n position: absolute;\n bottom: 20%;\n font-size: 20px;\n padding: 10px 20px;\n text-decoration: none;\n text-align: center;\n color: white;\n font-weight: 400;\n border-radius: 10px;\n background: rgba(255, 255, 255, 0.07);\n border: 2px solid rgba(255, 255, 255, 0.05);\n backdrop-filter: blur(15px);\n transition-property: border-color;\n transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n transition-duration: 150ms;\n}\n\n.credit-button:hover {\n border: 2px solid white;\n}\n/* ------------ Credit Button CSS Ends ------------ */\n\n" }} />
     
    </>
  );
};

export default Clock;
