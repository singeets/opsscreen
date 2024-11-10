// src/RightPanel.js

import React, { useEffect, useState } from 'react';
import { Drawer, Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import DataService from './DataService';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RightPanel = () => {
  const [topIssues, setIssues] = useState([]);
  const [topSolvedIssues, setSolvedIssues] = useState([]);
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    setIssues(DataService.fetchIssues());
    setSolvedIssues(DataService.fetchSolvedIssues());
    setReportData([
      { label: 'Report 1', value: 5 },
      { label: 'Report 2', value: 3 },
      { label: 'Report 3', value: 8 },
    ]);
  }, []);

  const chartData = {
    labels: reportData.map((data) => data.label),
    datasets: [
      {
        label: 'Status Overview',
        data: reportData.map((data) => data.value),
        backgroundColor: ['#3f51b5', '#f50057', '#ff9800'],
      },
    ],
  };

  return (
    <Drawer variant="persistent" anchor="right" open>
      <Box sx={{ width: 300, padding: 2 }}>
        <Typography variant="h6" align="center">
          Status Overview
        </Typography>
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="subtitle1">Top Issues</Typography>
          <List>
            {topIssues.map((issue) => (
              <ListItem key={issue.id}>
                <ListItemText primary={issue.description} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="subtitle1">Top Solved Issues</Typography>
          <List>
            {topSolvedIssues.map((issue) => (
              <ListItem key={issue.id}>
                <ListItemText primary={issue.description} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="subtitle1">Status Graph</Typography>
          <Box sx={{ height: 150 }}>
            <Bar data={chartData} />
          </Box>
        </Paper>
      </Box>
    </Drawer>
  );
};

export default RightPanel;
