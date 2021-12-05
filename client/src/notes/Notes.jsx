import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { fetchNotes, postNotes, editNotes } from '../helper.js';

const StyledNotes = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #A8D0E6;
  font-family: 'Varela Round', sans-serif;
  color: white;
  border: #24305E 5px solid;
`

const StyledTextArea = styled.textarea`
  height: 250px;
  width: 250px;
  font-family: 'EB Garamond', serif;
  color: #F76C6C;
`

const Notes = (props) => {
  const [ notes, setNotes ] = useState('');

  useEffect( () => {
    fetchNotes()
      .then( ({data}) => {
        setNotes(data.notes);
      })
      .catch( (err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    console.log('submitting msg: ', notes);
    e.preventDefault();

    editNotes(notes)
      .then( () => {
        console.log('successfully edited note');
        fetchNotes()
          .then( ({data}) => {
            setNotes(data.notes);
          })
          .catch( (err) => {
            console.error(err);
          });
      })
      .catch( (err) => {

      });
  }

  return (
    <div className='notes-container' style={{fontFamily: 'Varela Round, sans-serif'}}>
      Notes:
      <StyledNotes onSubmit={handleSubmit}>
        <StyledTextArea
          className='notes'
          value={notes}
          placeholder={'Jot important stuff down here...'}
          onChange={(e) => {setNotes(e.target.value)}} />
        <input type='submit' value='save' />
      </StyledNotes >
    </div>
  )
}

export default Notes;