import React from 'react';
import { DashboardContainer } from '../../styles/dashboard.styled.js';
import Clock from './Clock.jsx';

const Dashboard = ( {name} ) => {
  return (
    <DashboardContainer className='dashboard'>
      <div className='welcome-msg'>Welcome back, {name}</div>
      <hr />
      <Clock />
      <br />
      <br />
      You have # unfinished tasks and # reminders.
    </DashboardContainer>
  )
}

export default Dashboard;