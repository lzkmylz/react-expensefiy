import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expense';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(selectExpensesTotal(props.expenses)).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content_container">
                <h1 className="page-header__title">
                    Viewing <span>{props.expenses.length}</span> {expenseWord} totaling <span>{formatedExpensesTotal}</span>
                </h1>
                <div className="page-header_actions">
                    <Link className="button" to="/create" >Add Expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);