import React from 'react';
import Clock from './Clock.jsx';

const Dashboard = ( {name} ) => {
  return (
    <div className='dashboard'>
      <h1>Welcome, {name}</h1>
      {/* TODO:  */}
      <Clock />
    </div>
  )
}

export default Dashboard;