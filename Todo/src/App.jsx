import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}placeholder="Add a new Task"/>
        <button onClick={addTodo}><i className="fas fa-plus"></i></button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <input type='checkbox' name="" id='' />
            {todo}
            <button onClick={() => removeTodo(index)}><i className="fas fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
