import axios from "axios";

const API_URL = process.env.GPT_API_URL; // your existing API endpoint

export async function callExternalGPT(userMessage) {
  try {
    const response = await axios.post(API_URL, { message: userMessage });
    return response.data.reply || "⚠️ No response from API.";
  } catch (error) {
    console.error("❌ External API Error:", error.message);
    return "⚠️ Unable to connect to GPT API.";
  }
}
