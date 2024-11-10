// src/App.js

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import SidePanel from './components/SidePanel';
// import RightPanel from './components/RightPanel';
import TopBanner from './components/Banner';
import ChatBox from './components/ChatBox';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);
  const toggleRightPanel = () => setIsRightPanelOpen(!isRightPanelOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleLeftPanel}>
            {isLeftPanelOpen ? 'Hide' : 'Show'} Left Panel
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Service Ticket Management
          </Typography>
          <Button color="inherit" onClick={toggleDarkMode}>
            {darkMode ? 'Light Theme' : 'Dark Theme'}
          </Button>
          {/* <IconButton color="inherit" onClick={toggleRightPanel}>
            {isRightPanelOpen ? 'Hide' : 'Show'} Right Panel
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Box display="flex">
        {isLeftPanelOpen && <SidePanel />}
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TopBanner />
        </Box>
        {/* {isRightPanelOpen && <RightPanel />} */}
      </Box>
      <ChatBox /> {/* Chat box positioned at the bottom center */}
    </ThemeProvider>
  );
}

export default App;
