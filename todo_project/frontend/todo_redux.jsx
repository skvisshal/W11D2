import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';

const newTodos = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const store = configureStore();
    window.store = store;
    console.log(store.getState());
    console.log(store.dispatch(receiveTodo({ id: 3, title: "New Todo" })));
    console.log(store.getState());
    console.log(store.dispatch(receiveTodos(newTodos)));
    console.log(store.getState());
    console.log(store.dispatch(removeTodo(newTodos[2])));
    console.log(store.getState());
    // ReactDOM.render(store, document.getElementById('main'));
});