import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startExportAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

describe('jest with firebase', () => {
    it('is at least loadable', () => {
        expect(database).not.toBeUndefined()
    })
});

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('12345', {
        description: 'oh fuck'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: {
            description: 'oh fuck'
        }
    })
});

test('Should setup add expense action object with provide values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

// test('should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'mouse',
//         amount: 30,
//         note: 'this one is better',
//         createdAt: 1000
//     };
//     store.dispatch(startExportAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
        
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData);
//         done();
//     });
// });

// test('should add expense with default to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseDefault = {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0
//     };
//     store.dispatch(startExportAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefault
//             }
//         });
        
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefault);
//         done();
//     });
// });