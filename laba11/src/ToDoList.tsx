import React, { useState, useEffect } from 'react';

interface Task {
    text: string;
    completed: boolean;
    date: Date;
    editing: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterMode, setFilterMode] = useState<'all' | 'completed' | 'active'>('all');
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
      if (newTaskText.trim() !== '') {
          const newTask: Task = {
              text: newTaskText,
              completed: false,
              date: new Date(),
              editing: false
          };
          setTasks([...tasks, newTask]);
          setNewTaskText('');
      }
  };

  const clearAllTasks = () => {
      setTasks([]);
  };

  const sortByDate = () => {
      const sortedTasks = [...tasks].sort((a, b) => a.date.getTime() - b.date.getTime());
      setTasks(sortedTasks);
  };

  const sortByText = () => {
      const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
      setTasks(sortedTasks);
  };

  const deleteTask = (text: string) => {
      const updatedTasks = tasks.filter(task => task.text !== text);
      setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (text: string) => {
      const updatedTasks = tasks.map(task =>
          task.text === text ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTaskText(event.target.value);
  };

  const filteredTasks = tasks.filter(task => {
      if (filterMode === 'all') return true;
      if (filterMode === 'completed') return task.completed;
      if (filterMode === 'active') return !task.completed;
  });

  return (
      <div className="app">
          <h1>JS Список дел</h1>
          <input id="taskInput" type="text" placeholder="Новая задача" value={newTaskText} onChange={handleInputChange} />
          <button onClick={addTask}>Добавить</button>
          <button onClick={clearAllTasks}>Очистить всё</button>
          <button onClick={sortByDate}>Сортировать по дате</button>
          <button onClick={sortByText}>Сортировать по тексту</button>
          <div>
              <a href="#" onClick={() => setFilterMode('all')}>Все</a>
              <a href="#" onClick={() => setFilterMode('completed')}>Сделанные</a>
              <a href="#" onClick={() => setFilterMode('active')}>Не сделанные</a>
          </div>
          <ul>
              {filteredTasks.map(task => (
                  <li key={task.text}>
                      <span>{task.date.toLocaleDateString('ru-RU')}</span>
                      <span onClick={() => toggleTaskCompletion(task.text)}>{task.text}</span>
                      <button onClick={() => deleteTask(task.text)}>X</button>
                      <button onClick={() => toggleTaskCompletion(task.text)}>Сделано</button>
                  </li>
              ))}
          </ul>
      </div>
  );
};


export default ToDoList;