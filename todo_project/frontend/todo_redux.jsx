import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP, receiveStep, receiveSteps, removeStep } from './actions/step_actions';

const items = {
  todos: {
    1: {
      id: 1,
      title: 'take a shower',
      body: 'and be clean',
      done: false
    }
  },
  steps: {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const store = configureStore();
    window.store = store;
    const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }  ];

    const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }];

    store.dispatch(receiveTodos(newTodos));
    store.dispatch(receiveSteps(newSteps));
    console.log(store.getState()); // should return only the new todos and steps

    store.dispatch(receiveTodo({ id: 3, title: "New Todo"}));
    store.dispatch(receiveStep({ id: 3, title: "New Step"}));
    console.log(store.getState()); // should include the newly added todo and step

    store.dispatch(receiveTodo({ id: 3, title: "Newer Todo"}));
    store.dispatch(receiveStep({ id: 3, title: "Newer Step", done: true}));
    console.log(store.getState()); // should update the previously added todo and step

    store.dispatch(removeTodo({ id: 3, title: "Newer Todo" }));
    store.dispatch(removeStep({ id: 3, title: "Newer Step"}));
    console.log(store.getState()); // should not include the previously added todo
    
    // ReactDOM.render(store, document.getElementById('main'));
});