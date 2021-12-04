import React from 'react';
import Clock from './Clock.jsx';

const Dashboard = ( {name} ) => {
  return (
    <div className='dashboard'>
      <h1>Welcome back, {name}</h1>
      <Clock />

      <br />
      <br />
      You have # unfinished tasks and # reminders.
    </div>
  )
}

export default Dashboard;