import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';

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
    ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});