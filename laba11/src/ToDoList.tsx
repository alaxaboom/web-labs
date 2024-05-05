import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState<number | null>(null); 

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputValue
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTask = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTask = (id: number, newText: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Добавить задачу</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={todo.text}
                  onChange={e => {
                    const newText = e.target.value;
                    editTask(todo.id, newText);
                  }}
                />
                <button onClick={() => setEditId(null)}>Отмена</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => deleteTask(todo.id)}>Удалить</button>
                <button onClick={() => setEditId(todo.id)}>Редактировать</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
