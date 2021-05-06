const router = require("express").Router();
const apiRouter = require("./api");
const { route } = require("./homeRoutes");
const homeroutes = require("./homeRoutes");

router.use("/api", apiRouter);
router.use("/", homeroutes);

module.exports = router;
