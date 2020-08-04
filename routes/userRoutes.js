const express = require("express");
const router = express.Router();
const userRouter = require("../controller/User");

//route login
router.post("/login", userRouter.login);

//route register
router.post("/register", userRouter.register);

module.exports = router;
