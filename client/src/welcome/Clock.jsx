import React, { useState, useEffect } from 'react';

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [ day, setDay ] = useState('');
  const [ date, setDate ] = useState('');

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString());
    };

    const intervalID =  setInterval(updateClock, 1000);

    return function cleanup() {
      clearInterval(intervalID);
    };
  }, [time]);

  useEffect( () => {
    let newDate = new Date();
    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    if (month < 10) {
      month = '0' + month;
    }
    if (date < 10) {
      date = '0' + date;
    }

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    setDay(weekday[day]);
    setDate(`${month}.${date}.${year}`);
  }, []);

  return (
    <span className='clock' style={{fontSize: '30px'}}>
      It is currently {time} on {day}, {date}
    </span>
  )
}

export default Clock;