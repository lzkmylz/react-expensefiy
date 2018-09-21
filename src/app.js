import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
}).catch((e) => {
    console.log('error!' + e);
});

