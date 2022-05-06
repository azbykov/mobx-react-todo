import React from 'react';
import {TodoItemProps} from "../store/root";

export const TodoItem = ({isChecked, name, id, onClickHandler}: any) => {
    return (
        <div className='todo-item'>
            <label onClick={() => console.log('tst', {id, name, onClickHandler})}>
                <input type='checkbox' value={id} checked={isChecked} />
                {name}
            </label>
        </div>
    );
};
