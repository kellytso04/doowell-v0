import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import NamePrompt from './welcome/NamePrompt.jsx';
import Dashboard from './welcome/Dashboard.jsx';

const AppContainer = styled.div`
  border: #f7d088 5px solid;
  border-radius: 10px;
  padding: 10px;
`

const App = () => {
  const [ name, setName ] = useState('');
  const [ dashboardVisible, setDashboardVisible ] = useState(false);

  return (
    <div className='app'>
      <AppContainer >
      { name.length ? <Dashboard name={name} /> : <NamePrompt setName={setName} /> }


      </AppContainer>
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('app'));