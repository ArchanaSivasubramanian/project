import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItem, setNewTodoItem] = useState({});

  const handleAddTodoItem = (todoItem) => {
    setTodoItems([...todoItems, todoItem]);
    setNewTodoItem({});
  };

  const handleEditTodoItem = (todoItem) => {
    const updatedTodoItems = todoItems.map((ti) => (ti.id === todoItem.id ? todoItem : ti));
    setTodoItems(updatedTodoItems);
  };

  const handleDeleteTodoItem = (id) => {
    const updatedTodoItems = todoItems.filter((ti) => ti.id !== id);
    setTodoItems(updatedTodoItems);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form>
        <label>
          Task:
          <input type="text" value={newTodoItem.task} onChange={(e) => setNewTodoItem({ ...newTodoItem, task: e.target.value })} />
        </label>
        <br />
        <button onClick={() => handleAddTodoItem(newTodoItem)}>Add Todo Item</button>
      </form>
      <ul>
        {todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            handleEditTodoItem={handleEditTodoItem}
            handleDeleteTodoItem={handleDeleteTodoItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;