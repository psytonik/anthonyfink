const express = require('express');
const router = express.Router();

const {updatePortfolio,createPortfolio,getPortfolio,deletePortfolio,getPortfolioById} = require('../controller/portfolioController');

router.post('/portfolio',createPortfolio);
router.get('/portfolio',getPortfolio);
router.get('/portfolio/:id',getPortfolioById);
router.patch('/portfolio/:id',updatePortfolio);
router.delete('/portfolio/:id',deletePortfolio);

module.exports = router;
