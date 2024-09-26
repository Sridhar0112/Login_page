// import React from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

// // const ModalComponent = ({ modalIsOpen, activeEvent, closeModal }) => {
// //   return (
// //     <Modal
// //       isOpen={modalIsOpen}
// //       onRequestClose={closeModal}
// //       overlayClassName="modal-overlay"
// //       className="modal-content"
// //     >
// //       {activeEvent && (
// //         <div>
// //           <h2>Event Details</h2>
// //           <p><strong>Task:</strong> {activeEvent.task}</p>
// //           <p><strong>Date:</strong> {activeEvent.date.toDateString()}</p>
// //           <button onClick={closeModal}>Close</button>
// //         </div>
// //       )}
// //     </Modal>
// //   );
// // };

// // export default ModalComponent;

// const ModalComponent = ({ modalIsOpen, activeEvent, closeModal }) => {
//     return (
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         overlayClassName="modal-overlay"
//         className="modal-content" // This will use the existing styles
//       >
//         {activeEvent && (
//           <div className="event-popup"> 
//             <h2>Event Details</h2>
//             <p><strong>Task:</strong> {activeEvent.task}</p>
//             <p><strong>Date:</strong> {activeEvent.date.toDateString()}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         )}
//       </Modal>
//     );
//   };
  
//   export default ModalComponent;


// ModalComponent.jsx
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalComponent = ({ modalIsOpen, activeEvent, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      {activeEvent && (
        <div>
          <h2>Event Details</h2>
          <p><strong>Task:</strong> {activeEvent.title}</p>
          <p><strong>Start:</strong> {activeEvent.start.toString()}</p>
          <p><strong>End:</strong> {activeEvent.end.toString()}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
