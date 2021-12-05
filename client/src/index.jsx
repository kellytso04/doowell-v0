import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { AppContainer, GroupAContainer, TaskReminderContainer, HabitContainer, Footer } from '../styles/app.styled.js';
import NamePrompt from './welcome/NamePrompt.jsx';
import Dashboard from './welcome/Dashboard.jsx';
import TaskList from './tasks/TaskList.jsx';
import ReminderList from './reminders/ReminderList.jsx';
import HabitList from './habits/HabitList.jsx';

const App = () => {
  const [ name, setName ] = useState('Kelly');

  return (
    <div className='app'>
      <AppContainer >
        <GroupAContainer >
          { name.length ? <Dashboard name={name} /> : <NamePrompt setName={setName} /> }
          <TaskReminderContainer>
            <br />
            { name.length ? <TaskList /> : null }
            <br />
            <hr />
            <br />
            { name.length ? <ReminderList /> : null }
          </TaskReminderContainer>
        </ GroupAContainer>
        <br />
        <hr />
        <br />
        { name.length ? <HabitList /> : null }
        <br />
        <hr />
      </AppContainer>
      <footer className='footer'>
        <a href='https://github.com/kellytso04/doowell' target="_blank" rel="noopener noreferrer" className='repo-link'>View on GitHub</a>
      </footer>
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('app'));