import moment from 'moment'

const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: 2,
    description: 'Rent',
    note: '',
    amount: 19500,
    createdAt: moment(0).subtract(3, 'days').valueOf()
},{
    id: 3,
    description: 'Credit Card',
    note: '',
    amount: 200,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;