import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense} 
            history={history} 
            expense={expenses[0]} 
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should edit expenses correctly with editExpense', () => {
    const newExpense = {
        ...expenses[0],
        amount: 666
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(newExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, newExpense);
});

test('should remove expense correctly with startRemoveExpense', () => {
    wrapper.find('button').simulate('click', () => {});
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
});