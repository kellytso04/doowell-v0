import React, {useState, useEffect} from 'react';

const Task = ( {task, category, color} ) => {
  const [ checked, setChecked ] = useState(false);

  useEffect( () => {
    const task = document.getElementsByClassName('task')[0];

    if (checked) {
      task.style.opacity = '75%';
    } else {
      task.style.opacity = '100%';
    }
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <div className='task' style={{color: `${color}`}}>
      <span className='task-description'>
        {task}
        <br />
        {category}
      </span>
      <span>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
        />
      </span>
    </div>
  )
}

export default Task;