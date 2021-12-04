import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { fetchTasks, addTask, deleteTask } from '../helper.js';
import Task from './Task.jsx';
import NewTaskForm from './NewTaskForm.jsx';

const TaskList = (props) => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then( ({data}) => {
        setTasks(data);
      })
      .catch( (err) => {
        console.error(err);
        console.error('Failed to retrieve tasks');
      });
  }, []);

  const handleDelete = (taskText) => {
    deleteTask(taskText)
      .then( () => {
        fetchTasks()
          .then( ({data}) => {
            setTasks(data);
          })
          .catch( (err) => {
            console.error(err);
          });
      })
      .catch( (err) => {
        console.error(err);
      })
  }

  const handleAdd = (taskObject) => {
    addTask(taskObject)
      .then( () => {
        fetchTasks()
          .then( ({data}) => {
            setTasks(data);
          })
          .catch( (err) => {
            console.error(err);
          });
      });
  }

  return (
    <div>
      <ul className='task-list'>
        { tasks.length && tasks.map( (task, i) => {
          return (
            <Task
              taskText={task.task}
              category={task.category}
              color={`#${task.hex_color}`}
              key={i}
              handleDelete={handleDelete}
              />
          )
        }) }
      </ul>
      <NewTaskForm handleAdd={handleAdd}/>
    </div>
  )
}

export default TaskList;