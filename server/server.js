import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import whatsappRoutes from "./routes/whatsappRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/webhook", whatsappRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
