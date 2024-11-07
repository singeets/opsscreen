import React, { useState } from 'react';
import Banner from './components/Banner';
import SidePanel from './components/SidePanel';
import Chatbot from './components/Chatbot';
import ChatDisplay from './components/ChatDisplay';
import './App.css';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleNewMessage = (question, response) => {
    setChatHistory([...chatHistory, { question, response }]);
  };

  return (
    <div className="App">
      <Banner />
      <div className="content">
        <SidePanel />
        <ChatDisplay history={chatHistory} />
      </div>
      <Chatbot onMessageSubmit={handleNewMessage} />
    </div>
  );
}

export default App;
