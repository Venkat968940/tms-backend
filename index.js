const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors")
const publicRouter = require("./routes/publicRouter");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

// MongoDB Connection using mongoose.connect
const uri ="mongodb+srv://amvenky97:VCrNo7s52NNG1rn2@cluster0.adfob.mongodb.net/tms?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully with Mongoose"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

publicRouter(app);

// Simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
