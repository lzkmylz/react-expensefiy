import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';
import { dispatch } from 'rxjs/internal/observable/range';

export const LogInPage = ({ startLogIn }) => (
    <div>
        <button onClick={startLogIn} >LogIn</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogIn: () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);