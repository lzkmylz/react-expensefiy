import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisiableExpenses from './selectors/expense';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();


store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent bill', amount: 1900 }));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visiableExpenses = getVisiableExpenses(state.expenses, state.filters);
console.log(visiableExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));