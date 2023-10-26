const express = require('express');
const router = express.Router();

// Import the visitController to handle visit-related requests
const visitController = require('../controllers/visitController');

// Visits routes
router.post('/visits', visitController.captureVisit);
router.get('/visits', visitController.getAllVisits);
router.get('/visits/:visitId', visitController.getVisitById);
router.put('/visits/:visitId', visitController.updateVisit);
router.delete('/visits/:visitId', visitController.deleteVisit);

module.exports = router;

