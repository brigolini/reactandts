import React from 'react';
import './App.css';
import useTodoApi from './lib/UseTodoApi';
import TodoItem from './components/TodoItem';
import "/node_modules/primeflex/primeflex.css";

function App() {
  const todos = useTodoApi();
  if (!todos) return <div>loading</div>

  return <>{todos.map((todo) => <TodoItem todo={todo}/>)}</>;
}

export default App;
