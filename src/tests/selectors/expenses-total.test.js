import selectExpenseTotal from '../../selectors/expenses-total';
import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },{
        id: 2,
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id:3,
        description: 'Credit Card',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
];

test('should return 0 for no expenses', () => {
    var total = selectExpenseTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up single expense', () => {
    var total = selectExpenseTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    var total = selectExpenseTotal(expenses);
    expect(total).toBe(114195)
});