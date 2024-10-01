// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import TodoListComponent from '../components/TodoListComponent';
// import ModalComponent from '../components/ModalComponent';
// import '../components/CalendarComponent.css'; // Assuming the CSS file path is correct

// // Custom Year View Component
// const YearView = ({ events, onSelectEvent }) => {
//   const currentYear = moment().year();
//   const months = Array.from({ length: 12 }, (_, i) => moment().month(i));

//   const generateDaysForMonth = (month) => {
//     const startOfMonth = month.startOf('month');
//     const endOfMonth = month.endOf('month');
//     const days = [];

//     for (let day = startOfMonth; day.isBefore(endOfMonth); day = day.clone().add(1, 'day')) {
//       days.push(day);
//     }

//     return days;
//   };

//   return (
//     <div className="year-view">
//       {months.map((month) => (
//         <div key={month.month()} className="month">
//           <h3>{month.format('MMMM YYYY')}</h3>
//           <div className="days-grid">
//             {generateDaysForMonth(month).map((day) => (
//               <div key={day.date()} className="day">
//                 <span>{day.format('D')}</span>
//                 {events
//                   .filter(event => moment(event.start).isSame(day, 'day'))
//                   .map(event => (
//                     <div
//                       key={event.title}
//                       className="event"
//                       onClick={() => onSelectEvent(event)}
//                     >
//                       {event.title}
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const localizer = momentLocalizer(moment);

// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [view, setView] = useState('month');
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       const newEvent = {
//         title: newTask,
//         start: selectedDate,
//         end: moment(selectedDate).add(1, 'hour').toDate(), // Duration of 1 hour
//       };
//       setEvents([...events, newEvent]);
//       setNewTask('');
//     }
//   };

//   const openEventModal = (event) => {
//     setActiveEvent(event);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setActiveEvent(null);
//   };

//   const handleDateClick = (slotInfo) => {
//     setSelectedDate(slotInfo.start);
//   };

//   return (
//     <div className="calendar-page">
//       <div className="left-sidebar">
//         <TodoListComponent
//           newTask={newTask}
//           setNewTask={setNewTask}
//           addTask={addTask}
//         />
//       </div>

//       <div className="calendar-container">
//         <h1>Calendar</h1>
//         {view === 'year' ? (
//           <YearView events={events} onSelectEvent={openEventModal} />
//         ) : (
//           <Calendar
//             localizer={localizer}
//             events={events}
//             defaultView={view}
//             views={['month', 'week', 'day', 'agenda']}
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             style={{ height: '75vh', width: '100%' }}
//             onSelectEvent={openEventModal}
//             onSelectSlot={handleDateClick}
//           />
//         )}
//         <div className="view-switch-buttons">
//           <button onClick={() => setView('year')}>Year View</button>
//           <button onClick={() => setView('month')}>Month View</button>
//         </div>
//       </div>

//       <ModalComponent
//         modalIsOpen={modalIsOpen}
//         activeEvent={activeEvent}
//         closeModal={closeModal}
//       />
//     </div>
//   );
// };

// export default CalendarPage;



// CalendarPage.jsx
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TodoListComponent from '../components/TodoListComponent';
import ModalComponent from '../components/ModalComponent';
import "../components/CalendarComponent1.css";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [view, setView] = useState('month'); // Default to month view
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  // Add a new task associated with the selected date
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newEvent = {
        title: newTask,
        start: selectedDate,
        end: moment(selectedDate).add(1, 'hour').toDate(), // Duration of 1 hour
      };
      setEvents([...events, newEvent]);
      setNewTask('');
    }
  };

  // Handle event click - Open modal with event details
  const openEventModal = (event) => {
    setActiveEvent(event);
    setModalIsOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setActiveEvent(null);
  };

  // Handle view change
  const handleViewChange = (newView) => {
    setView(newView);
  };

  // Handle date click (for adding events)
  const handleDateClick = (slotInfo) => {
    setSelectedDate(slotInfo.start);
  };

  return (
    <div className="calendar-page">
     

      <div className="left-sidebar">
        {/* To-do list and task creation */}
        <TodoListComponent
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      </div>

      <div className="calendar-container">
      <h1>Calendar</h1>
        <Calendar
          localizer={localizer}
          events={events}
          defaultView={view}
          views={['day', 'week', 'month', 'agenda']}  // Add year in 'agenda' view
          startAccessor="start"
          endAccessor="end"
          selectable
          style={{ height: '80vh', width: '100%' }}
          onSelectEvent={openEventModal}  // Handle event click
          onSelectSlot={handleDateClick}  // Handle date click for creating new event
          onView={handleViewChange}       // Handle view change
        />
      </div>

      <ModalComponent
        modalIsOpen={modalIsOpen}
        activeEvent={activeEvent}
        closeModal={closeModal}
      />
    </div>
  );
};

export default CalendarPage;






// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import TodoListComponent from '../components/TodoListComponent';
// import ModalComponent from '../components/ModalComponent';
// import "../components/CalendarComponent.css";

// // Custom Year View Component
// const YearView = ({ events, onSelectEvent }) => {
//   const year = moment().year();
//   const months = Array.from({ length: 12 }, (_, i) => moment().month(i));

//   // Function to generate the days for each month
//   const generateDaysForMonth = (month) => {
//     const startOfMonth = month.startOf('month');
//     const endOfMonth = month.endOf('month');
//     const days = [];
    
//     // Add days of the month to the array
//     for (let day = startOfMonth; day.isBefore(endOfMonth); day = day.clone().add(1, 'day')) {
//       days.push(day);
//     }

//     return days;
//   };

//   return (
//     <div className="year-view">
//       {months.map((month) => (
//         <div key={month.month()} className="month">
//           <h3>{month.format("MMMM YYYY")}</h3>
//           <div className="days-grid">
//             {generateDaysForMonth(month).map((day) => (
//               <div key={day.date()} className="day">
//                 <span>{day.format('D')}</span>
//                 {/* Display events on specific days */}
//                 {events
//                   .filter(event => moment(event.start).isSame(day, 'day'))
//                   .map((event) => (
//                     <div key={event.title} className="event" onClick={() => onSelectEvent(event)}>
//                       {event.title}
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const localizer = momentLocalizer(moment);

// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [view, setView] = useState('month'); // Default to month view
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       const newEvent = {
//         title: newTask,
//         start: selectedDate,
//         end: moment(selectedDate).add(1, 'hour').toDate(), // Duration of 1 hour
//       };
//       setEvents([...events, newEvent]);
//       setNewTask('');
//     }
//   };

//   const openEventModal = (event) => {
//     setActiveEvent(event);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setActiveEvent(null);
//   };

//   const handleDateClick = (slotInfo) => {
//     setSelectedDate(slotInfo.start);
//   };

//   return (
//     <div className="calendar-page">
//       <div className="left-sidebar">
//         <TodoListComponent
//           newTask={newTask}
//           setNewTask={setNewTask}
//           addTask={addTask}
//         />
//       </div>

//       <div className="calendar-container">
//         <h1>Calendar</h1>
//         {view === 'year' ? (
//           <YearView events={events} onSelectEvent={openEventModal} />
//         ) : (
//           <Calendar
//             localizer={localizer}
//             events={events}
//             defaultView={view}
//             views={['month', 'week', 'day', 'agenda']} // Include year view
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             style={{ height: '75vh', width: '100%' }}
//             onSelectEvent={openEventModal} // Handle event click
//             onSelectSlot={handleDateClick} // Handle date click for creating new event
//           />
//         )}
//         <button onClick={() => setView('year')}>Year View</button>
//         <button onClick={() => setView('month')}>Month View</button>
//       </div>

//       <ModalComponent
//         modalIsOpen={modalIsOpen}
//         activeEvent={activeEvent}
//         closeModal={closeModal}
//       />
//     </div>
//   );
// };

// export default CalendarPage;






//only month name coming

// // CalendarPage.jsx
// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import TodoListComponent from '../components/TodoListComponent';
// import ModalComponent from '../components/ModalComponent';
// import "../components/CalendarComponent.css";

// // Custom Year View Component
// const YearView = ({ events, onSelectEvent }) => {
//   const year = moment().year();
//   const months = Array.from({ length: 12 }, (_, i) => moment().month(i));
  
//   return (
//     <div className="year-view">
//       {months.map((month) => (
//         <div key={month.month()} className="month">
//           <h3>{month.format("MMMM YYYY")}</h3>
//           {events.filter(event => moment(event.start).isSame(month, 'month')).map((event) => (
//             <div key={event.title} className="event" onClick={() => onSelectEvent(event)}>
//               {event.title}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const localizer = momentLocalizer(moment);

// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [view, setView] = useState('month'); // Default to month view
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       const newEvent = {
//         title: newTask,
//         start: selectedDate,
//         end: moment(selectedDate).add(1, 'hour').toDate(), // Duration of 1 hour
//       };
//       setEvents([...events, newEvent]);
//       setNewTask('');
//     }
//   };

//   const openEventModal = (event) => {
//     setActiveEvent(event);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setActiveEvent(null);
//   };

//   const handleDateClick = (slotInfo) => {
//     setSelectedDate(slotInfo.start);
//   };

//   return (
//     <div className="calendar-page">
//       <div className="left-sidebar">
//         <TodoListComponent
//           newTask={newTask}
//           setNewTask={setNewTask}
//           addTask={addTask}
//         />
//       </div>

//       <div className="calendar-container">
//         <h1>Calendar</h1>
//         {view === 'year' ? (
//           <YearView events={events} onSelectEvent={openEventModal} />
//         ) : (
//           <Calendar
//             localizer={localizer}
//             events={events}
//             defaultView={view}
//             views={['month', 'week', 'day', 'agenda']} // Include year view
//             startAccessor="start"
//             endAccessor="end"
//             selectable
//             style={{ height: '75vh', width: '100%' }}
//             onSelectEvent={openEventModal} // Handle event click
//             onSelectSlot={handleDateClick} // Handle date click for creating new event
//           />
//         )}
//         <button onClick={() => setView('year')}>Year View</button>
//         <button onClick={() => setView('month')}>Month View</button>
//       </div>

//       <ModalComponent
//         modalIsOpen={modalIsOpen}
//         activeEvent={activeEvent}
//         closeModal={closeModal}
//       />
//     </div>
//   );
// };

// export default CalendarPage;
