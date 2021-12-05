import React, {useState, useEffect} from 'react';
import { DashboardContainer } from '../../styles/dashboard.styled.js';
import { fetchIncompleteTasks, fetchIncompleteReminders } from '../helper.js';
import Clock from './Clock.jsx';

const Dashboard = ( {name} ) => {
  const [ numIncTasks, setNumIncTasks ] = useState([]);
  const [ numIncReminders, setNumIncReminders ] = useState([]);

  useEffect( () => {
    fetchIncompleteTasks()
      .then( ({data}) => {
        setNumIncTasks(data.length);

        fetchIncompleteReminders()
          .then( ({data}) => {
            setNumIncReminders(data.length);
          })
          .catch( (err) => {
            console.error(err);
          })
      })
      .catch( (err) => {
        console.error(err);
      });
  }, []);

  return (
    <DashboardContainer className='dashboard'>
      <div className='welcome-msg'>Welcome back, {name}</div>
      <hr />
      <Clock />
      <br />
      <br />
      You have {numIncTasks} unfinished {numIncTasks < 2 ? 'task' : 'tasks'} and {numIncReminders} {numIncReminders < 2 ? 'reminder' : 'reminders'}.
    </DashboardContainer>
  )
}

export default Dashboard;