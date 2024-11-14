import React, { useState } from 'react';
import api from '../api';

const ExpenseForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { title, amount: parseFloat(amount), date };
        const response = await api.post('/', newExpense);
        onAdd(response.data);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
