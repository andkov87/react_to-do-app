import React from 'react';

function AddTask ({onChangeHandler, createTask}) {
    return (
    <div id='menu'>
        <input type="text" placeholder="enter new task"  onChange={onChangeHandler}/>
            <button onClick={createTask}>add task</button>
    </div>
    )
}

export default AddTask;