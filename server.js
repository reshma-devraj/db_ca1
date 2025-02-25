const express = require("express");
const connectDB = require("./server");
const Restaurant = require("./models/restaurant");
const Menu = require("./models/Menu");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});