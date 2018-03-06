import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import css from '../style/style.css';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers/index';

render(
    <Provider store={createStore(todo)}>
        <App />
    </Provider>, 
    document.getElementById('app')
);