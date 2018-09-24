import authReducer from '../../reducers/auth';

test('should work correctly with login case', () => {
    const action = {
        type: "LOGIN",
        uid: "1234213451"
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
})

test('should work correctly with logout case', () => {
    const action = {
        type: "LOGOUT"
    };
    const OriState = {
        uid: "3215492"
    };
    const state = authReducer(OriState, action);
    expect(state).toEqual({});
});

test('should work with default case', () => {
    const action = {
        type: "UNKNOWN"
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
})