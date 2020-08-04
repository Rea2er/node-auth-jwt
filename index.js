const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connect to MongoDB success")
);

// Import Routes
const authRoute = require("./routes/auth");

// Route Middlewares
app.use("/api/user", authRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
