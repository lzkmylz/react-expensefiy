// EXPENSE REDUSER

const expenseReduserDefaultState = [];

const expenseReduser = (state = expenseReduserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];     
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                //console.log(expense.id, action.id)
                if (expense.id === action.id) {
                    //console.log(expense)
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};

export default expenseReduser;