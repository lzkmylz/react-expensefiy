import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpensesSummary } from '../../components/ExpensesSummary';

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
    }
];

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});