// src/TopBanner.js

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const TopBanner = () => (
  <Box display="flex" flexDirection="column" alignItems="flex-start" p={2}>
    <Typography variant="h6">Operations</Typography>
    <Typography variant="body2">Department: Finance</Typography>
    <Divider sx={{ my: 1, width: '100%' }} />
    <Typography variant="body2">User: John Doe</Typography>
    <Typography variant="body2">Date: {new Date().toLocaleDateString()}</Typography>
  </Box>
);

export default TopBanner;
