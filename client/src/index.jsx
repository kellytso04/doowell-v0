import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NamePrompt from './welcome/NamePrompt.jsx';
import Dashboard from './welcome/Dashboard.jsx';

const App = () => {
  const [ name, setName ] = useState('');
  const [ dashboardVisible, setDashboardVisible ] = useState(false);

  return (
    <div className='app'>
      { name.length ? <Dashboard name={name} /> : <NamePrompt setName={setName} /> }
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('app'));