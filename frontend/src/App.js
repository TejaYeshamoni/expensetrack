import React, { useEffect, useState } from 'react';
import api from './api';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        const response = await api.get('/');
        setExpenses(response.data);
    };

    const handleDelete = async (id) => {
        await api.delete(`/${id}`);
        setExpenses(expenses.filter(expense => expense._id !== id));
    };

    useEffect(() => { fetchExpenses(); }, []);

    return (
        <div className="App">
            <h1>Personal Expense Tracker</h1>
            <ExpenseForm onAdd={fetchExpenses} />
            <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </div>
    );
}

export default App;
