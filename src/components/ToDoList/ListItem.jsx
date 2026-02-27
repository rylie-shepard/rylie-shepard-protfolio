import React from 'react';
import './ToDoListStyle.css';

export default function ListContainer( {task, completed, deleteItem}) {
    const [face, setFace] = React.useState('front');

    const ListContent = face ? <div className='task-todo'>Task: {task}</div> : <div className='task-completed'>Completed: {completed}</div>;

    const handleClick = () => {
        setFace(!face);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteItem(task);
    }

    return (
        <div className='full-task' onClick={handleClick}>
            <span className='delete-task' onClick={handleDelete}>X</span>
            {ListContent}
        </div>
    )
}
