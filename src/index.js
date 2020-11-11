import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import EmployeestoreService from './services/employeestore-service'
import { EmployeestoreServiceProvider } from './components/employeestore-service-context'

import App from '../src/components/app/app';
import * as serviceWorker from './serviceWorker';
import store from './store'

const employeestoreService = new EmployeestoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <EmployeestoreServiceProvider value={employeestoreService}>
                <Router>
                  <App />
                </Router>
            </EmployeestoreServiceProvider>
        </ErrorBoundry>
    </Provider>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
