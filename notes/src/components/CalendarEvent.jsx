import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './custom-calendar.css';

const CalendarEvent = () => {

  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateClick = (date) => {
    const eventTitle = prompt('Enter event title:');
    if (eventTitle) {
      setEvents([...events, { date, title: eventTitle }]);
    }
  }

  return (

    <div className="App grid grid-cols-2 gap-4 ">


      <div className='border border-black m-2 '>

        <h2>Events:</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.date.toDateString()}: {event.title}
            </li>
          ))}
        </ul>
      </div>
      <section className='  border-l-4 border-gray-300 h-[1000px] '>

        <div className='border border-black m-4 flex justify-center items-center '>

          <Calendar
            onClickDay={handleDateClick}
            value={date}
            className="custom-calendar "
          />
        </div>
      </section>
    </div>
  )
}

export default CalendarEvent