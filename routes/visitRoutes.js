const express = require('express');
const router = express.Router();

// Import the visitController to handle visit-related requests
const visitController = require('../controllers/visitController');


router.post('/visit', visitController.captureVisit);
router.get('/visit', visitController.getAllVisits);
router.get('/visit/:visitId', visitController.getVisitById);
router.put('/visit/:visitId', visitController.updateVisit);
router.delete('/visit/:visitId', visitController.deleteVisit);

module.exports = router;
