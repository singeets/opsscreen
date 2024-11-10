// src/SidePanel.js

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Badge, Typography, Box, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';

const mockData = {
  currentIssues: [
    { id: 1, description: 'Issue 1', severity: 'High' },
    { id: 2, description: 'Issue 2', severity: 'Medium' },
  ],
  solvedIssues: [
    { id: 1, description: 'Solved Issue 1', resolvedBy: 'User A' },
    { id: 2, description: 'Solved Issue 2', resolvedBy: 'User B' },
  ],
  reports: [
    { id: 1, title: 'Report 1', date: '2024-11-01' },
    { id: 2, title: 'Report 2', date: '2024-11-02' },
  ],
};

const SidePanel = () => {
  const [dialogData, setDialogData] = useState(null);
  const [dialogTitle, setDialogTitle] = useState('');

  const handleTileClick = (title, dataKey) => {
    setDialogTitle(title);
    setDialogData(mockData[dataKey]);
  };

  const handleCloseDialog = () => {
    setDialogData(null);
    setDialogTitle('');
  };

  return (
    <Drawer variant="persistent" anchor="left" open>
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" align="center">
          Dashboard
        </Typography>
        <List>
          <ListItem button onClick={() => handleTileClick('Current Issues', 'currentIssues')}>
            <Badge badgeContent={2} color="error">
              <BugReportIcon />
            </Badge>
            <ListItemText primary="Current Issues" />
          </ListItem>
          <ListItem button onClick={() => handleTileClick('Solved Issues', 'solvedIssues')}>
            <Badge badgeContent={2} color="secondary">
              <CheckCircleIcon />
            </Badge>
            <ListItemText primary="Solved Issues" />
          </ListItem>
          <ListItem button onClick={() => handleTileClick('Reports', 'reports')}>
            <Badge badgeContent={2} color="primary">
              <ReportIcon />
            </Badge>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Box>

      {/* Modal Popup */}
      <Dialog open={Boolean(dialogData)} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                {dialogTitle === 'Current Issues' && (
                  <>
                    <TableCell>ID</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Severity</TableCell>
                  </>
                )}
                {dialogTitle === 'Solved Issues' && (
                  <>
                    <TableCell>ID</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Resolved By</TableCell>
                  </>
                )}
                {dialogTitle === 'Reports' && (
                  <>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Date</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {dialogData && dialogData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.description || item.title}</TableCell>
                  <TableCell>{item.severity || item.resolvedBy || item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={() => alert('Export to CSV')}>
              Export CSV
            </Button>
            <Button variant="contained" color="secondary" onClick={() => alert('Export to PDF')} sx={{ ml: 1 }}>
              Export PDF
            </Button>
            <Button variant="contained" color="info" onClick={() => alert('Send Email')} sx={{ ml: 1 }}>
              Send Email
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Drawer>
  );
};

export default SidePanel;
