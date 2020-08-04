const express = require("express");
const router = express.Router();
const userRouter = require("../controller/User");

//route login
router.post("/login", userRouter.login);

//route ke server 2
router.post("/register", userRouter.register);

module.exports = router;
