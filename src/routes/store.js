import { legacy_createStore as createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// make available to mutate state
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // mutate state
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload), // return new state
});

// const store = createStore(reducer);
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
