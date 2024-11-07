import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ onMessageSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      const response = generateMockResponse(userInput);
      onMessageSubmit(userInput, response);
      setUserInput("");
    }
  };

  const generateMockResponse = (question) => {
    const responses = [
      "This is a mock response to your question.",
      "Thank you for reaching out!",
      "Please provide more details.",
      "We are here to help you!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
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
