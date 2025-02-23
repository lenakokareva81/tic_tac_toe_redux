import { appreducer } from "./reduser";

const createStore = (reducer) => {
  let state;
  let counter = 0;
  let listeners = {};

  return {
    dispatch: (action) => {
      state = reducer(state, action);
      for (const key in listeners) {
        listeners[key]();
      }
    },
    getState: () => state,
    subscribe: (listener) => {
      const lastCounter = counter;
      listeners[lastCounter] = listener;
      counter = counter + 1;
      return () => {
        delete listeners[lastCounter];
      };
    },
  };
};

export const store = createStore(appreducer);
store.dispatch({});
