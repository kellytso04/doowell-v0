import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import NamePrompt from './welcome/NamePrompt.jsx';
import Dashboard from './welcome/Dashboard.jsx';
import TaskList from './tasks/TaskList.jsx';
import ReminderList from './reminders/ReminderList.jsx';
import HabitList from './habits/HabitList.jsx';

const AppContainer = styled.div`
  border: #f7d088 5px solid;
  border-radius: 10px;
  padding: 10px;
`

const App = () => {
  const [ name, setName ] = useState('Kelly');

  return (
    <div className='app'>
      <AppContainer >
      { name.length ? <Dashboard name={name} /> : <NamePrompt setName={setName} /> }
      { name.length ? <TaskList /> : null }
      <br />
      <hr />
      <br />
      { name.length ? <ReminderList /> : null }
      <br />
      <hr />
      <br />
      { name.length ? <HabitList /> : null }
      </AppContainer>
      <footer>
        <a href='https://github.com/kellytso04/doowell'>View on GitHub</a>
      </footer>
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('app'));