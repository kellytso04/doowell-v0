import React, { useState, useEffect, useContext } from 'react';
// import { TaskDataContext, TaskDataContextProvider } from '../TaskDataContext.js';
// import { ReminderDataContext, ReminderDataContextProvider } from '../ReminderDataContext.js';
import { DashboardContainer } from '../../styles/dashboard.styled.js';
import { fetchIncompleteTasks, fetchIncompleteReminders } from '../helper.js';
import Clock from './Clock.jsx';

const Dashboard = ( {name} ) => {
  // const [ numIncTasks, setNumIncTasks ] = useState([]);
  // const [ numIncReminders, setNumIncReminders ] = useState([]);

  // const { taskData } = useContext(TaskDataContext);
  // const { reminderData } = useContext(ReminderDataContext);

  // useEffect( () => {
  //   fetchIncompleteTasks()
  //     .then( ({data}) => {
  //       setNumIncTasks(data.length);

  //       fetchIncompleteReminders()
  //         .then( ({data}) => {
  //           setNumIncReminders(data.length);
  //         })
  //         .catch( (err) => {
  //           console.error(err);
  //         })
  //     })
  //     .catch( (err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <DashboardContainer className='dashboard' >
      <div className='welcome-msg'>Welcome back, {name}</div>
      <hr />
      <Clock />
    </ DashboardContainer>
  )
}

export default Dashboard;