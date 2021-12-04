import React, { useState, useEffect } from 'react';

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString());
    };

    const intervalID =  setInterval(updateClock, 1000);

    return function cleanup() {
      clearInterval(intervalID);
    };
  }, [time]);

  return (
    <div className='clock'>
      <p>{time}</p>
    </div>
  )
}

export default Clock;