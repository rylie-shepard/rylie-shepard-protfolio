import React from 'react';
import './WordForm.css';

export default function ItemForm({addTask}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const ToDoItem = document.querySelector('[name=insertTask]');
        
        const enValue = ToDoItem.value;
        
        ToDoItem.value = '';
        
        addTask(enValue);
    }

    return (
      <section className='task-form'>
        <h2>Add a new Task</h2>
        <form action="#" method="GET" onSubmit={handleSubmit}>
          <div className='form-row'>
            <label>
              Add to To-Do List:
              <input type="text" name="insertTask" placeholder='Insert Task'/>
            </label>
          </div>
          <div className='form-row'>
            <button type='submit'>Add Task</button>
          </div>
        </form>
      </section>
    )
}