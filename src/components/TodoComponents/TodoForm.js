import React from 'react';

const ToDoForm = props => {
    return(
        <form>
            <input 
                onChange={props.handleToDoChange}
                type="text"
                name="toDo"
                value={props.value}
                placeholder="ToDo..."
            />
            <button onclick={props.handleAddToDo}>Add a ToDo</button>
            <button onclick={props.handleClearToDos}>Clear Completed Tasks</button>
        </form>
    )
};

export default ToDoForm;