import React, { useState, useEffect } from 'react';
import { DashboardContainer } from '../../styles/dashboard.styled.js';
import { fetchIncompleteTasks, fetchIncompleteReminders } from '../helper.js';
import Clock from './Clock.jsx';

const Dashboard = ( {name} ) => {
  return (
    <DashboardContainer className='dashboard' >
      <div className='welcome-msg'>Welcome back, {name}</div>
      <hr />
      <Clock />
    </ DashboardContainer>
  )
}

export default Dashboard;