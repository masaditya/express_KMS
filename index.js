require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").Server(app);
const verifyToken = require("./utils/verifyToken");

// routes
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/auth", userRoutes);

app.use(verifyToken);

// CRUD below



// CRUD

server.listen(3000, function () {
  console.log("server running");
});
