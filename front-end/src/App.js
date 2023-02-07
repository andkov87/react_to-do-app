import React, {useState, useEffect} from 'react';
import Task from "./components/Task"
import './App.css';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState(null)
  const [newTask, setNewtask] = useState('')

  const onChangeHandler = event => {
    //event.preventDeafult();
    setNewtask(event.target.value)
  }

  const createTask = () => {
    fetch('http://localhost:6789/tasks', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: [newTask]
      })
    }).then(() => {
      console.log('new task added')
    })
    setTasks( prev => [...prev, {title: newTask}])
  };

  const handleDelete = (id) => {
    fetch('http://localhost:6789/tasks/' + tasks.id, {
      method: 'DELETE'
    }).then(() => {
      console.log('task deleted')
    })
    setTasks(tasks => tasks.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:6789/tasks/')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setTasks(data)
    })
  }, [])


  return (
    <>
        <h1>ToDo List</h1>
        <div id="menu">
            <label>Your new to-do</label>
            <AddTask onChangeHandler={onChangeHandler} createTask={createTask}/>
        </div>
        <div id="list">
            {tasks && tasks.map(task => <Task key={task.id} task={task} handleDelete={handleDelete} />)}
        </div>
    </>
  );
}

export default App;
