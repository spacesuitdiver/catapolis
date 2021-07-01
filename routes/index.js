const router = require("express").Router();
const catRoutes = require("./catRoutes");

router.use("/api/cats", catRoutes);

module.exports = router;
