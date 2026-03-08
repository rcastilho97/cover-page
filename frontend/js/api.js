// =============================================
// API.JS — All calls to Spring Boot backend
// =============================================

const API_BASE = 'https://cover-page-backend-270502567008.europe-west1.run.app';

async function askGemini(question) {
  try {
    const response = await fetch(`${API_BASE}/api/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: question })
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('API call failed:', error);
    return {
      success: false,
      error: 'Could not reach the server. Please try again.'
    };
  }
}