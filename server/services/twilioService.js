import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export async function sendWhatsAppMessage(to, message) {
  try {
    await client.messages.create({
      from: process.env.TWILIO_NUMBER,
      to,
      body: message,
    });
    console.log("✅ Sent message to", to);
  } catch (error) {
    console.error("❌ Twilio Error:", error.message);
  }
}
