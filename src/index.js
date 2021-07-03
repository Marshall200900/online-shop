import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Cart from './pages/cart';
import store from './store';
import { Provider } from 'react-redux';
import PhonesService from './services/phones-service';
import { PhonesServiceProvider } from './contexts/phones-service-context';

const phonesService = new PhonesService();

const root = (
    <React.StrictMode>
        <Provider store={store}>
          <PhonesServiceProvider value={phonesService}>
            <App />
          </PhonesServiceProvider>
        </Provider>
    </React.StrictMode>
)

ReactDOM.render(root, document.getElementById('root'));