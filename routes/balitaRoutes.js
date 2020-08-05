const express = require("express");
const router = express.Router();
const balitaRouter = require("../controller/Balita");

router.get("/", balitaRouter.index)

router.get("/:id", balitaRouter.search)

router.post("/", balitaRouter.store)

router.put("/:id", balitaRouter.update)

router.delete("/:id", balitaRouter.destroy)

module.exports = router;