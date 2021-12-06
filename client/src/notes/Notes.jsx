import React, {useState, useEffect} from 'react';
import { StyledNotes, StyledTextArea } from '../../styles/notes.styled.js';
import { fetchNotes, postNotes, editNotes } from '../helper.js';

const Notes = (props) => {
  const [ previousNotes, setPreviousNotes ] = useState('');
  const [ notes, setNotes ] = useState('');

  useEffect( () => {
    fetchNotes()
      .then( ({data}) => {
        setNotes(data.notes);
        setPreviousNotes(data.notes);
      })
      .catch( (err) => {
        console.error(err);
      });
  }, []);

  useEffect( () => {
    const intervalID = setInterval( () => {
      // Every 3s, we check if the user has added notes
      // If they have, we'll save the notes to the database

      if (notes !== previousNotes) {
        editNotes(notes)
          .then( () => {
            fetchNotes()
            .then( ({data}) => {
              setNotes(data.notes);
              setPreviousNotes(data.notes);
            })
            .catch( (err) => {
              console.error(err);
            });
          })
          .catch( (err) => {
            console.error(err);
          })
      }
    }, 2000);

    return function cleanup() {
      clearInterval(intervalID);
    }
  }, [notes]);

  return (
    <div className='notes-container' style={{fontFamily: 'Varela Round, sans-serif', marginTop: '20px'}}>
      <div className='notes-msg'> 💡 Notes</div>
      <StyledNotes >
        <StyledTextArea
          className='notes'
          value={notes}
          placeholder={'Jot important stuff down here...'}
          onChange={(e) => {setNotes(e.target.value)}} />
      </StyledNotes >
    </div>
  )
}

export default Notes;

// const handleSubmit = (e) => {
//   e.preventDefault();

//   editNotes(notes)
//     .then( () => {
//       fetchNotes()
//         .then( ({data}) => {
//           setNotes(data.notes);
//         })
//         .catch( (err) => {
//           console.error(err);
//         });
//     })
//     .catch( (err) => {
//       console.error(err);
//     });
// }
// <input type='submit' value='Save' style={{backgroundColor: 'white', border: '#F76C6C 2px solid'}}/>
