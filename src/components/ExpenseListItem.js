import React from 'react';
import { Link } from 'react-router-dom'

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>description: {description}</p>
        </Link>
        <p>amount: {amount}</p>
        <p>createdAt: {createdAt}</p>
    </div>
);

export default ExpenseListItem;