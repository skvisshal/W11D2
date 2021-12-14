import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', function () {
    const store = configureStore();
    window.store = store;
    // ReactDOM.render(store, document.getElementById('main'));
});