// src/api.js
import axios from 'axios';

// Mock data in case of timeout or error
const mockChatResponse = {
  response: "This is a fallback mock response for your question.",
};

const mockPanelData = {
  "Current Issues": [
    { id: 1, title: "Mock Issue 1", description: "Mock description for current issue 1" },
    { id: 2, title: "Mock Issue 2", description: "Mock description for current issue 2" },
  ],
  "Solved Issues": [
    { id: 3, title: "Mock Solved Issue 1", description: "Mock description for solved issue 1" },
    { id: 4, title: "Mock Solved Issue 2", description: "Mock description for solved issue 2" },
  ],
  "Reports": [
    { reportId: 1, name: "Mock Report 1", details: "Mock details for report 1" },
    { reportId: 2, name: "Mock Report 2", details: "Mock details for report 2" },
  ],
};

// Helper function to add timeout
const withTimeout = (promise, ms, fallback) => {
  const timeout = new Promise((resolve) =>
    setTimeout(() => resolve(fallback), ms)
  );
  return Promise.race([promise, timeout]);
};

// Fetch chat response with timeout and mock fallback
export const fetchChatResponse = async (question) => {
  try {
    const response = await withTimeout(
      axios.post("http://localhost:1924/chat", { question }),
      100, // Timeout in ms
      mockChatResponse // Fallback data
    );
    return response.data || mockChatResponse; // If no data, use mock
  } catch (error) {
    console.error("Error fetching chat response:", error);
    return mockChatResponse;
  }
};

// Fetch panel data with timeout and mock fallback
export const fetchPanelData = async (category) => {
  try {
    const response = await withTimeout(
      axios.get("http://localhost:1924/data", { params: { category } }),
      100, // Timeout in ms
      mockPanelData[category] || [] // Fallback data
    );
    return response.data || mockPanelData[category] || []; // If no data, use mock
  } catch (error) {
    console.error("Error fetching panel data:", error);
    return mockPanelData[category] || []; // Return empty array as fallback
  }
};
