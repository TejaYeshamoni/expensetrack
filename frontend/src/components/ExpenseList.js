import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => (
    <div>
        {expenses.map((expense) => (
            <ExpenseItem key={expense._id} expense={expense} onDelete={onDelete} />
        ))}
    </div>
);

export default ExpenseList;
