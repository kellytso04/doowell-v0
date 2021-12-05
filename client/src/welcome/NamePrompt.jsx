import React, { useState, useEffect } from 'react';

const NamePrompt = ( {setName} ) => {
  const [ username, setUsername ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(username);
  }

  return (
    <div className='name-prompt' style={{fontFamily: 'Varela Round, sans-serif'}}>
      <h1>Hi, I'm Doowell.</h1>
      <br />
      <h1>What's your name?</h1>
      <form >
        <input
          type='text'
          name='user-name'
          placeholder='My name is...'
          onChange={ (e) => { setUsername(e.target.value) }}
        />
        <button type='submit' value='Go' onSubmit={handleSubmit}>Go</button>
      </form>
    </div>
  )
}

export default NamePrompt;