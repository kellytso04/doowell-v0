import React, { useState, useEffect } from 'react';

const NamePrompt = ( {setName} ) => {
  const [ username, setUsername ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(username);
  }

  return (
    <div className='name-prompt'>
      <h1>Hi, I'm Doowell.</h1>
      <br />
      <h1>What's your name?</h1>
      <form onSubmit={ handleSubmit } >
        <input
          type='text'
          name='user-name'
          placeholder='My name is...'
          onChange={ (e) => { setUsername(e.target.value) }}
        />
        <input type="submit" value="Go"/>
      </form>
    </div>
  )
}

export default NamePrompt;