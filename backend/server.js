const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

dotenv.config();
const app = express();

app.use(cors(
  {
  origin: process.env.FRONTEND_URL, 
  methods: ["GET", "POST"],
  credentials: true
}
));
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
