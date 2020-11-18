import React, { useState } from 'react';

let Completed = false;

const TodoItem = props => {

    const DeleteTodo = () => {
        console.log("Item Deleted");
    }
    const StrikeTodo = () => {
        return (
            <li>
                <del>{props.todo.name}</del>
            </li>
        )
    }

    return (
        <li>
            {props.todo.name}
            <span style={{ marginLeft: '60%' }}><button type="button" class="btn btn-success" onClick={StrikeTodo}>Done</button><button style={{ marginLeft: 10 + 'px' }} type="button" class="btn btn-danger" onClick={DeleteTodo}>Delete</button></span>
        </li>
    )
}

export default TodoItem;