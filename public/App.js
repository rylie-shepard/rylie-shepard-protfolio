import React from 'react';

import ToDoList from './components/ToDoList/ToDoList';
import ItemForm from './components/ToDoList/ItemForm';

import './App.css';


function App() {
  const [ToDoItems, setToDoItems] = React.useState([
    {task:"Go grocery shopping", completed:"oversettelse"},
    {task:"Take teh boys to the park", completed:"ost"},
    {task:"Feed the snake~", completed:"dyr"},
    {task:"World Dominmation", completed:"håndkanon"},
  ]);

  const addTask = (task, completed) => {
    const newTasks = [...ToDoItems, {task, completed}];
    setToDoItems(newTasks);
  }

  const deleteTask = (task) => {
    const newTasks = ToDoItems.filter(item => item.task !== task);
    setToDoItems(newTasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        To-Do Task List
      </header>
      <main>
        <ItemForm addTask={addTask}/>
        <ToDoList tasks={ToDoItems} deleteTask={deleteTask}/>

      </main>
    </div>
  );
}

export default App;
