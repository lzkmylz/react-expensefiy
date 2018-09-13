import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>description: {description}</p>
        </Link>
        <p>amount: {numeral(amount).format('$0,0.00')}</p>
        <p>createdAt: {moment(createdAt).format('YYYY-MM-DD')}</p>
    </div>
);

export default ExpenseListItem;