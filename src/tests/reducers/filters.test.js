import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        ...defaultState
    });
});

test('should set text filter', () => {
    const text = 'fuck you';
    const action = {
        type: "SET_TEXT_FILTER",
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...defaultState,
        text
    });
});

test('should sort by date', () => {
    const action = {
        type: "SORT_BY_DATE"
    };
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...defaultState
    });
});

test('should sort by amount', () => {
    const action = {
        type: "SORT_BY_AMOUNT"
    };
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...defaultState,
        sortBy: 'amount'
    });
});

test('should set start date', () => {
    const action = {
        type: "SET_START_DATE",
        startDate: 12345
    };
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...defaultState,
        startDate: 12345
    });
});

test('should set end date', () => {
    const action = {
        type: "SET_END_DATE",
        endDate: 12345
    };
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...defaultState,
        endDate: 12345
    });
});