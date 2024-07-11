const Budget = require('../model/Budget');

const addBudget = async (req, res) => {
    const { category, limit } = req.body;
    try {
        const newBudget = new Budget({
            user: req.user.id,
            category,
            limit,
        });

        const budget = await newBudget.save();
        res.json(budget);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({ user: req.user.id }).sort({ date: -1 });
        res.json(budgets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteBudget = async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);

        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }

        if (budget.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await budget.remove();
        res.json({ msg: 'Budget removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { addBudget, getBudgets, deleteBudget };
