import React, {useState, useEffect} from 'react';
import { StyledNotes, StyledTextArea } from '../../styles/notes.styled.js';
import { fetchNotes, postNotes, editNotes } from '../helper.js';

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
    e.preventDefault();

    editNotes(notes)
      .then( () => {
        fetchNotes()
          .then( ({data}) => {
            setNotes(data.notes);
          })
          .catch( (err) => {
            console.error(err);
          });
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  return (
    <div className='notes-container' style={{fontFamily: 'Varela Round, sans-serif'}}>
      <div className='notes-msg'> 💡 Notes</div>
      <StyledNotes onSubmit={handleSubmit}>
        <StyledTextArea
          className='notes'
          value={notes}
          placeholder={'Jot important stuff down here...'}
          onChange={(e) => {setNotes(e.target.value)}} />
        <input type='submit' value='Save' style={{backgroundColor: 'white', border: '#F76C6C 2px solid'}}/>
      </StyledNotes >
    </div>
  )
}

export default Notes;