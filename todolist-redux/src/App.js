import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import TodoList from './components/ToDoList';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
