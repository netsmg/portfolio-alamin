"use client";

import React, { useState } from 'react';

const Chatbot = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if window is defined (to avoid server-side rendering issues)
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const newRecognition = new SpeechRecognition();

      newRecognition.onstart = () => {
        console.log('Voice is active');
      };

      newRecognition.onend = () => {
        console.log('Voice ended');
      };

      newRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        handleFormSubmit();
      };

      setRecognition(newRecognition);
    }
  }, []);

  const handleSpeechRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };


  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();

    if (inputValue.trim() === '') return;

    setChatHistory((prevHistory) => [...prevHistory, { type: 'user', text: inputValue }]);
    setInputValue('');

    // Simulate bot response (replace with actual logic)
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      setChatHistory((prevHistory) => [...prevHistory, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  const getBotResponse = (userInput) => {
    const responses = [
      { question: 'hello', answer: 'Hi there!' },
      { question: 'how are you', answer: "I'm just a bot, but I'm doing well!" },
      { question: 'your name', answer: "I'm a chatbot, you can call me ChatGPT." },
      { question: 'goodbye', answer: 'Goodbye! Feel free to chat anytime.' },
      // Add more questions and answers here
    ];

    for (const { question, answer } of responses) {
      if (userInput.includes(question)) {
        return answer;
      }
    }

    return "I'm sorry, I didn't understand that.";
  };

  return (
  <>
    <div className="main-container">
      <div id="chatbot-container">
        {/* Render chat history */}
        {chatHistory.map((item, index) => (
          <p key={index} className={item.type === 'user' ? 'recorder' : 'speech'}>
            {item.text}
          </p>
        ))}
      </div>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Say something"
        />
        <button type="submit" className="submit fab fa-telegram-plane"></button>
      </form>

      <button type="button" onClick={handleSpeechRecognition} className="fa fa-microphone">
        Start Voice
      </button>
      <style dangerouslySetInnerHTML={{__html: "*{\n\n margin:0;\n\n padding:0;\n\n box-sizing:border-box;\n\n}\n\nbody{\n\n width:100%;\n\n min-height:100vh;\n\n}\n\n.main-container{\n\n margin:0 auto;\n\n width:100%;\n\n height:100%;\n\n max-width:500px;\n\n padding:20px 0;\n\n}\n\n#chatbot-container{\n\n width:95%;\n\n height:350px;\n\n margin:10px auto;\n\n padding:10px 5px;\n\n overflow-y:auto;\n\n background:#f3f3f3;\n\n display:flex;\n\n display:-ms-flexbox;\n\n display:inline-flex;\n\n display:-webkit-flex;\n\n flex-direction: column;\n\n border-radius:10px;\n\n}\n\n.speech::first-letter,\n\n.recorder::first-letter{\n\n text-transform: capitalize;\n\n}\n\n#chatbot-container .recorder{\n\n color:#fff;\n\n background:#78f;\n\n border-radius:5px;\n\n padding:8px;\n\n margin:4px 0;\n\n max-width:250px;\n\n align-self:flex-start;\n\n flex-shrink: 0;\n\n \n\n}\n\n#chatbot-container .speech{\n\n color:#fff;\n\n background:#1c8;\n\n border-radius:5px;\n\n padding:8px;\n\n margin:4px 0;\n\nflex-shrink: 0;\n\n align-self:flex-end;\n\n max-width:250px;\n\n}\n\nbutton{\n\n border:none;\n\n outline:none;\n\n background:none;\n\n}\n\n.fa-telegram-plane{\n\n font-size:36px;\n\n width:15%;\n\n padding:8px 12px;\n\n line-height: 30px;\n\n cursor: pointer;\n\n display:inline-block;\n\n}\n\n.fa-telegram-plane:hover{\n\n color:#78f;\n\n}\n\n#btn{\n\n background:#78f;\n\n color:whiteSmoke;\n\n padding:10px 25px;\n\n font-size:22px;\n\n font-weight:600;\n\n display:block;\n\n box-shadow:0 3px 10px #a7f;\n\n margin:0 auto ;\n\n transition:0.5s;\n\n}\n\n#btn:hover{\n\n padding-right: 30px;\n\n background:#6a7;\n\n transition:0.5s;\n\n}\n\n#form{\n\n width:100%;\n\n text-align: center;\n\n margin-bottom: 8px;\n\n}\n\n#form #botvalue{\n\n padding:8px 10px;\n\n border-radius:6px;\n\n outline:none;\n\n width:calc(100% - 18%);\n\n line-height: 30px;\n\n border:1px solid #555;\n\n font-size:17px;\n\n font-weight:normal;\n\n}" }} />
    </div>
    </>
  );
};

export default Chatbot;
