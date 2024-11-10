// src/Chatbot.js

import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Paper, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (userInput.trim()) {
      setChatHistory([...chatHistory, { user: userInput, bot: 'This is a mock response.' }]);
      setUserInput('');
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, width: 300 }}>
      <IconButton color="primary" onClick={toggleChat}>
        <ChatIcon fontSize="large" />
      </IconButton>
      {isOpen && (
        <Paper sx={{ p: 2, mt: 1, maxHeight: 400, overflowY: 'auto' }}>
          <Typography variant="h6">Chat with us!</Typography>
          {chatHistory.map((entry, index) => (
            <Box key={index} sx={{ mt: 1 }}>
              <Typography variant="subtitle2" color="primary">User:</Typography>
              <Typography variant="body2">{entry.user}</Typography>
              <Typography variant="subtitle2" color="secondary">Bot:</Typography>
              <Typography variant="body2">{entry.bot}</Typography>
            </Box>
          ))}
          <TextField
            variant="outlined"
            fullWidth
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your question..."
            sx={{ mt: 2 }}
          />
          <Button onClick={handleSend} variant="contained" fullWidth sx={{ mt: 1 }}>
            Send
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Chatbot;
