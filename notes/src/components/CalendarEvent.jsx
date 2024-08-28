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

      {/* Notes module */}
      <div className='border border-black m-2 '>

        <h2>Notes</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.date.toDateString()}: {event.title}
            </li>
          ))}
        </ul>
      </div>

      <section className='  border-l-4 border-gray-300 h-[1000px] '>

        {/* Calender module */}
        <div className='border border-black m-2 '>
          {/* Add some styling to center the date */}

            
          <div className='flex justify-center p-2 m-2'>
            <p className='text-3xl bg-gray-400 text-white font-semibold font-custom px-3 py-2 rounded-md'>Calendar</p>
          </div>
          <div className='flex justify-start p-2 m-4'>
            <p className='text-3xl font-semibold text-gray-700 font-custom'>{date.toDateString()}</p>
          </div>
          <div className='flex justify-center'>
            <Calendar
              onClickDay={handleDateClick}
              value={date}
              className="custom-calendar font-custom"
              onChange={setDate} // Ensure that the date updates correctly on calendar day click
            />
          </div>
        </div>

      </section>
    </div>
  )
}

export default CalendarEvent