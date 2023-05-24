import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './Slices/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
