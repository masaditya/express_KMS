const express = require("express");
const router = express.Router();
const timbangRouter = require("../controller/Timbang");

router.get("/", timbangRouter.index)

router.get("/:id", timbangRouter.search)

router.post("/", timbangRouter.store)

router.put("/:id", timbangRouter.update)

router.delete("/:id", timbangRouter.destroy)

module.exports = router;