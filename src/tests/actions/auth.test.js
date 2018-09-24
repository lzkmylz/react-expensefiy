import { logIn, logOut } from '../../actions/auth';

test('should get login action correctly', () => {
    const action = logIn('123152351243');
    expect(action).toEqual({
        type: "LOGIN",
        uid: '123152351243'
    });
});

test('should get logout action correctly', () => {
    const action = logOut();
    expect(action).toEqual({
        type: "LOGOUT"
    })
});
