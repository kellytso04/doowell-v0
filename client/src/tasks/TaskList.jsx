import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Task from './Task.jsx';

const TaskList = (props) => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    return axios.get('/tasks')
      .then( ({data}) => {
        setTasks(data);
        console.log('Number of tasks: ', data.length);
      })
      .catch( (err) => {
        console.error(err);
        console.error('Failed to retrieve tasks');
      })
  }, []);

  return (
    <ul className='task-list'>
      { tasks.length && tasks.map( (task, i) => {
        return (
          <Task task={task.task} category={task.category} color={`#${task.hex_color}` key={i}}/>
        )
      }) }
    </ul>
  )
}

export default TaskList;