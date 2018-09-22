import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD EXPENSE
export const addExpense = (expense) => (
    {
        type: "ADD_EXPENSE",
        expense: expense
    }
);

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {
            description,
            note,
            amount,
            createdAt
        };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => (
    {
        type: "REMOVE_EXPENSE",
        id
    }
);

//START REMOVE EXPENSE
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        const updates = {};
        updates['/expenses/' + id] = null;
        return database.ref().update(updates).then(() => {
            dispatch(removeExpense({ id }));
        });
    };
}

//EDIT EXPENSE
export const editExpense = (id, updates) => (
    {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
);

//SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expensesData = [];
            snapshot.forEach((childSnapshot) => {
                expensesData.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setExpenses(expensesData));
        });
    };
};