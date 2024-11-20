const express = require('express');
const { createPaymentIntent } = require('../controller/paymentController');
const { protect } = require('../authMiddleware');

const router = express.Router();

router.post('/create-payment-intent', protect, createPaymentIntent);

module.exports = router;