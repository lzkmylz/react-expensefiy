import {
    setTextFilter,
    sortByDate, 
    sortByAmount,
    setStartDate, 
    setEndDate } from '../../actions/filters';

test('setTextFilter', () => {
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'abc'
    });
});

test('sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});

test('sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test('setStartDate', () => {
    const action = setStartDate(1000);
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: 1000
    });
});

test('setEndDate', () => {
    const action = setEndDate(1000);
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: 1000
    })
});