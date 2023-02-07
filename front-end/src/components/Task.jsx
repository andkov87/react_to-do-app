import React from "react";

function Task( {task, handleDelete}) {
    return (
        <div>
            <button onClick={() => handleDelete(task.id)}>delete</button>

            <li style={{ display: 'inline' }}>
                  {task.title}
            </li>
        
            <br></br>
        </div>
    )
}

export default Task
