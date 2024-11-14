import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => (
    <div>
        <h3>{expense.title}</h3>
        <p>${expense.amount} - {new Date(expense.date).toLocaleDateString()}</p>
        <button onClick={() => onDelete(expense._id)}>Delete</button>
    </div>
);

export default ExpenseItem;
