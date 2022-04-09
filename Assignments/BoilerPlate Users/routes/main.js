const express = require("express");
const router = express.Router();

const controllers = require("../controllers/main");

router.get("/user", controllers.get);

router.post("/user", controllers.post);

router.put("/user", controllers.put);

router.patch("/user", controllers.patch);

router.delete("/user", controllers.delete);

module.exports = router;