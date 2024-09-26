import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarComponent = ({ selectedDate, tasks, handleDateClick, openEventModal }) => {
  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateClick}
        value={selectedDate}
        tileContent={({ date, views }) =>
          tasks
            .filter((task) => task.date.toDateString() === date.toDateString())
            .map((task, index) => (
              <div
                key={index}
                className="event"
                onClick={() => openEventModal(task)} // Open modal on event click
              >
                {task.task}
              </div>
            ))
        }
      />
    </div>
  );
};

export default CalendarComponent;
