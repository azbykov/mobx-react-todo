import React from 'react';
import {TodoItem} from "./Todo-item";
import {TodoItemProps} from "../store/root";
import {useStore} from "../hooks/use-store";

export const TodoList = () => {
    const {items, setChecked, add} = useStore();
    const itemList = items && items.map(({id, name, isChecked}) => (
        <TodoItem key={name} id={id} name={name} isChecked={isChecked} onClickhandler={setChecked}/>
    ))
    return (
        <div className='list'>
            {itemList}
            <button onClick={() => add({name: 'test'})}>Add</button>
        </div>
    );
};
