// src/ChatBox.js

import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { DataService } from './DataService';

const ChatBox = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (userInput.trim()) {
      // Add user question to chat history
      const newChatHistory = [...chatHistory, { sender: 'User', message: userInput }];

      // Fetch response from API or mock data if timeout occurs
      const response = await DataService.fetchChatResponse(userInput);

      // Add bot response to chat history
      setChatHistory([...newChatHistory, { sender: 'Bot', message: response.message }]);
      setUserInput('');
    }
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        maxWidth: 400,
        padding: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h6" align="center">
        Chat with Us
      </Typography>
      <Box sx={{ maxHeight: 200, overflowY: 'auto', marginBottom: 1 }}>
        {chatHistory.map((chat, index) => (
          <Typography key={index} align={chat.sender === 'User' ? 'right' : 'left'}>
            <strong>{chat.sender}:</strong> {chat.message}
          </Typography>
        ))}
      </Box>
      <TextField
        fullWidth
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
        variant="outlined"
        sx={{ marginBottom: 1 }}
      />
      <Button variant="contained" color="primary" onClick={handleSend} fullWidth>
        Send
      </Button>
    </Paper>
  );
};

export default ChatBox;
