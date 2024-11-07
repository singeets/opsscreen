import React from 'react';
import './ChatDisplay.css';

const ChatDisplay = ({ history }) => {
  return (
    <div className="chat-display">
      <h3>Chat History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index} className="chat-entry">
            <strong>Q:</strong> {entry.question}
            <br />
            <strong>A:</strong> {entry.response}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatDisplay;
