const express = require('express');
const restsController = require('../controllers/restsController')

const router = express.Router();

router.get('/', restsController.getAllRestsController);
router.get('/toprated', restsController.getRestsByRateContrller)
router.post('/nearest', restsController.getRestsByLocationContrller)
router.get('/:id', restsController.getRestByIdContrller); // need debug
router.get('/cuisine/:cuisine', restsController.getRestsByCuisineContrller);






module.exports = router;