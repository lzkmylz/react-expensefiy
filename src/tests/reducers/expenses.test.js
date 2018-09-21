import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const action = {
        type: '@@INIT'
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '123432'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 3,
        description: 'extra',
        note: 'interesting',
        amount: 12345,
        createdAt: moment()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 12345666;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([{
        ...expenses[0],
        amount
    }, expenses[1], expenses[2]]);
});

test('should not edit an expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 12314,
        updates: {
            amount: 12345
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses[1]
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses[1]);
});