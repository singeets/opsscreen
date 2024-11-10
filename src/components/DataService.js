// src/DataService.js

import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 100, // Set timeout to 100ms
});

const mockResponses = {
  chatResponse: { message: "This is a mock chat response." },
  issues: [
    { id: 1, description: "Issue 1", severity: 1 },
    { id: 2, description: "Issue 2", severity: 2 },
  ],
  solvedIssues: [
    { id: 1, description: "Solved Issue 1", severity: 1 },
    { id: 2, description: "Solved Issue 2", severity: 3 },
  ],
  reports: [
    { id: 1, name: "Report 1", status: "Completed" },
    { id: 2, name: "Report 2", status: "Pending" },
  ],
};

export const DataService = {
  async fetchChatResponse(question) {
    try {
      const response = await axiosInstance.post('http://localhost:9000/new', { question });
      return response.data;
    } catch (error) {
      return mockResponses.chatResponse; // Return mock response on timeout
    }
  },

  async fetchIssues() {
    try {
      const response = await axiosInstance.get('http://localhost:9000/issues');
      return response.data;
    } catch (error) {
      return mockResponses.issues; // Return mock issues on timeout
    }
  },

  async fetchSolvedIssues() {
    try {
      const response = await axiosInstance.get('http://localhost:9000/solved');
      return response.data;
    } catch (error) {
      return mockResponses.solvedIssues; // Return mock solved issues on timeout
    }
  },

  async fetchReports() {
    try {
      const response = await axiosInstance.get('http://localhost:9000/reports');
      return response.data;
    } catch (error) {
      return mockResponses.reports; // Return mock reports on timeout
    }
  },
};

export default DataService;