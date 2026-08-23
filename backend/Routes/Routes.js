const {allHoldings , newOrder, allOrders, getProfile, allPositions } = require("../Controllers/Controllers");
const router = require("express").Router();
const { authenticateUser } = require("../middleware/AuthMiddleware");

router.get("/allHoldings" , authenticateUser , allHoldings);
router.get("/allpositions", authenticateUser, allPositions);
router.post("/newOrder" , authenticateUser, newOrder);
router.get("/allOrders", authenticateUser, allOrders);
router.get("/profile", authenticateUser, getProfile);

module.exports = router;