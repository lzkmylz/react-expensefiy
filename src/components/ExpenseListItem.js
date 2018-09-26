import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3>description: {description}</h3>
            <span>amount: {numeral(amount).format('$0,0.00')}</span>
        </div>
        <h3>createdAt: {moment(createdAt).format('YYYY-MM-DD')}</h3>
    </Link>
);

export default ExpenseListItem;