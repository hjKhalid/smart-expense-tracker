const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, deleteExpense } = require('../controller/expenseController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addExpense);
router.get('/', auth, getExpenses);
router.delete('/:id', auth, deleteExpense);

module.exports = router;
