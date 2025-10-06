import { callExternalGPT } from "../services/externalApiService.js";
import { sendWhatsAppMessage } from "../services/twilioService.js";

export async function handleIncomingMessage(req, res) {
  try {
    const { Body, From } = req.body;
    console.log("📩 WhatsApp message from:", From, "→", Body);

    // Call your external GPT API
    const gptReply = await callExternalGPT(Body);

    // Send reply back to WhatsApp user
    await sendWhatsAppMessage(From, gptReply);

    res.sendStatus(200);
  } catch (err) {
    console.error("❌ Error in WhatsApp Controller:", err.message);
    res.sendStatus(500);
  }
}
