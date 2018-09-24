import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startRemoveExpense,
    startSetExpenses,
    setExpenses,
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const mockUid = 'mockUid';

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${mockUid}/expenses`).set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense data in firebase by id', (done) => {
    const store = createMockStore({
        auth: {
            uid: mockUid
        }
    });
    const id = 0;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id: id
        });

        return  database.ref(`users/${mockUid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(null);
        done();
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
    });
});

test('should edit expense together with firebase', (done) => {
    const store = createMockStore({
        auth: {
            uid: mockUid
        }
    });
    const updates = {
        description: "should eidt test"
    };
    const id = expenses[1].id;
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });

        return database.ref(`users/${mockUid}/expenses/${id}`).update(updates);
    }).then(() => {
        database.ref(`users/${mockUid}/expenses/${id}`).once('value').then((snapshot) => {
            
            expect({
                ...snapshot.val(),
                id: snapshot.key
            }).toEqual({
                ...expenses[1],
                ...updates
            });
            done();
        });
    })
});

test('Should setup add expense action object with provide values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({
        auth: {
            uid: mockUid
        }
    });
    const expenseData = {
        description: 'mouse',
        amount: 30,
        note: 'this one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        
        return database.ref(`users/${mockUid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default to database and store', (done) => {
    const store = createMockStore({
        auth: {
            uid: mockUid
        }
    });
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        
        return database.ref(`users/${mockUid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

test('Should setup set expenses action object with provide expenses', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({
        auth: {
            uid: mockUid
        }
    });
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done()
    });
});