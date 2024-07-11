const express = require('express');
const router = express.Router();
const { addBudget, getBudgets, deleteBudget } = require('../controller/budgetController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addBudget);
router.get('/', auth, getBudgets);
router.delete('/:id', auth, deleteBudget);

module.exports = router;
