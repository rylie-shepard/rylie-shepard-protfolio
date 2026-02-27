import React from "react";
import './ToDoListStyle.css';
import ListItem from './ListItem';

export default function ListContainer({ToDoItems, deleteItem}) {

    const ItemList = ToDoItems.map(item => <ListItem task={item.task} completed={item.task} key={`${item.id}`} deleteItem={deleteItem} />);

    
    return (
        <section  className="list-container">
            {ItemList}
        </section>
    )
}