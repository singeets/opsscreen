import React, { useState } from 'react';
import './Chatbot.css';
import { fetchChatResponse } from './api';

const Chatbot = ({ onMessageSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim()) {
      const response = await fetchChatResponse(userInput);
      onMessageSubmit(userInput, response.response);
      setUserInput("");
    }
  };

  return (
    <div className="chatbot">
      <button className="chat-icon" onClick={toggleChat}>💬</button>
      {isOpen && (
        <div className="chat-box">
          <h4>Chat with us!</h4>
          <div className="chat-input-section">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
