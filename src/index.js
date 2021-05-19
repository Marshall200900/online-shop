import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import { Provider } from 'react-redux';

const root = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(root, document.getElementById('root'));