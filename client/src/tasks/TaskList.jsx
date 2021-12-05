import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { fetchTasks, addTask, updateTask, completeTask, deleteTask } from '../helper.js';
import Task from './Task.jsx';
import NewTaskForm from './NewTaskForm.jsx';

const StyledTaskList = styled.div`
  align-content: center;
  width: 50%;
  margin: 0;
  border: white solid 2px;
  margin-right: 4px;
`

const TaskList = (props) => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then( ({data}) => {
        setTasks(data);
      })
      .catch( (err) => {
        console.error(err);
      });
  }, []);

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

  const handleComplete = (taskText) => {
    completeTask(taskText)
      .catch( (err) => {
        console.error(err);
      });
  }

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

  return (
    <StyledTaskList className='task-list' >
      <div className='tasks-title' style={{textAlign: 'center'}}>
        Tasks
      </div>
      <div className='task-list' >
        { tasks.length ? tasks.map( (task, i) => {
          return (
            <Task
              taskText={task.task}
              category={task.category}
              color={`#${task.hex_color}`}
              key={i}
              no={i}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              />
          )
        }) : <div>Add a task to track it!</div>}
      </div>
      <NewTaskForm handleAdd={handleAdd}/>
    </ StyledTaskList>
  )
}

export default TaskList;