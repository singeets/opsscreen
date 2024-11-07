// src/api.js
export const fetchChatResponse = async (question) => {
    console.log(`Sending question to /chat: ${question}`);
    // Mock response for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          response: `This is a mock response for your question: "${question}"`,
        });
      }, 500); // Simulate network delay
    });
  };
  
  export const fetchPanelData = async (category) => {
    console.log(`Fetching data for: ${category}`);
    // Mock data for different categories
    const mockData = {
      "Current Issues": [
        { id: 1, title: "Issue 1", description: "Current issue description 1" },
        { id: 2, title: "Issue 2", description: "Current issue description 2" },
      ],
      "Solved Issues": [
        { id: 3, title: "Solved Issue 1", description: "Solved issue description 1" },
        { id: 4, title: "Solved Issue 2", description: "Solved issue description 2" },
      ],
      Reports: [
        { reportId: 1, name: "Report 1", details: "Report details 1" },
        { reportId: 2, name: "Report 2", details: "Report details 2" },
      ],
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[category] || []);
      }, 500); // Simulate network delay
    });
  };
  