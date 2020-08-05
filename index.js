require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").Server(app);
const verifyToken = require("./utils/verifyToken");

// routes
const userRoutes = require("./routes/userRoutes");
const balitaRoutes = require("./routes/balitaRoutes");
const timbangRoutes = require("./routes/timbangRoutes");


app.use(express.json());

app.use("/auth", userRoutes);

app.use(verifyToken);

// CRUD below

app.use("/balita", balitaRoutes)
app.use("/timbang", timbangRoutes)


// CRUD

server.listen(3000, function () {
  console.log("server running");
});