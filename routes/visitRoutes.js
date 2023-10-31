const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');

router.post('/record', visitController.recordVisit);

module.exports = router;



