const Expense = require('../models/expenseModel');

// GET all expenses
exports.getExpenses = async (req, res) => {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
};

// POST a new expense
exports.addExpense = async (req, res) => {
    const { title, amount, date } = req.body;
    const newExpense = new Expense({ title, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
};

// DELETE an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted successfully' });
};
