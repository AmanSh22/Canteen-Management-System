const express = require("express");
const checkoutControllers = require("../controllers/checkout");
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const router = express.Router();

router
.get("/", (req, res)=>{
    res.render("paymentDemo")
})
.post("/",[parseUrl, parseJson], checkoutControllers.payNow)
.post("/order/:orderId", checkoutControllers.paymentCallback)
module.exports = router;
