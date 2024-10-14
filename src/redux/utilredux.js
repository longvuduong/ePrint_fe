import { store } from './store';

function dispatch(action) {
  return store.dispatch(action);
}

function getState() {
  return store.getState();
}

export { dispatch, getState };
