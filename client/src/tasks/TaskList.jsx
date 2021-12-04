import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Task from './Task.jsx';

const TaskList = (props) => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    return axios.get('/tasks')
      .then( (tasks) => {
        setTasks(tasks);
        console.log('Number of tasks: ', tasks.length);
      })
      .catch( (err) => {
        console.error(err);
        console.error('Failed to retrieve tasks');
      })
  }, [tasks])

  return (
    <ul className='task-list'>
      { tasks.length && tasks.map( (task) => {
        console.log('current task: ', task);
        return (
          <Task />
        )
      }) }
    </ul>
  )
}

export default TaskList;