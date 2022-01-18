import React from 'react';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middleware from './middleware';
import reducer from './reducers'
import './index.css';
import App from './components/App';

let store = createStore(reducer, middleware)

render(
    <React.StrictMode>
        <Provider store={ store }>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')  
);
reportWebVitals();
