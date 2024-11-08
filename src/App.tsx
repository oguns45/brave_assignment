

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// //import './Dashboard.css'; // Import external CSS for styling

// type Note = {
//   _id: string;     // Use MongoDB's unique _id as string
//   title: string;  // Title of the note
//   content: string; // Content of the note
// };

// const Dashboard: React.FC = () => {
//   const [notes, setNotes] = useState<Note[]>([]);
//   const [selectedNote, setSelectedNote] = useState<Note | null>(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeView, setActiveView] = useState<'home' | 'notes' | 'details'>('home');

//   // Base URL for the API
//   const apiBaseUrl = 'http://localhost:5000/api/note'; // Adjust to match your server's URL

//   // Fetch notes from API on component mount
//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Fetch all notes from MongoDB
//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get(apiBaseUrl);
//       setNotes(response.data); // Assume API returns an array of notes
//     } catch (error) {
//       alert('Failed to fetch notes');
//     }
//   };

//   // Open modal for adding a new note or editing an existing one
//   const showModal = () => setIsModalVisible(true);

//   // Close the modal and reset any editing state
//   const closeModal = () => {
//     setIsModalVisible(false);
//     setIsEditing(false);
//     setSelectedNote(null);
//   };

//   // Add a new note or update an existing one
//   const addOrEditNote = async (title: string, content: string) => {
//     const values = { title, content };
//     if (isEditing && selectedNote) {
//       // Update note in MongoDB
//       try {
//         await axios.put(`${apiBaseUrl}/${selectedNote._id}`, values);
//         alert('Note updated successfully');
//         // fetchNotes(); // Refresh notes list
//         console.log(fetchNotes());
//       } catch (error) {
//         alert('Failed to update note');
//       }
//     } else {
//       // Add new note to MongoDB
//       try {
//         await axios.post(apiBaseUrl, values);
//         alert('Note added successfully');
//         fetchNotes(); // Refresh notes list
//       } catch (error) {
//         alert('Failed to add note');
//       }
//     }
//     closeModal();
//   };

//   // Delete selected note from MongoDB
//   const deleteNote = async () => {
//     if (selectedNote) {
//       try {
//         await axios.delete(`${apiBaseUrl}/${selectedNote._id}`);
//         alert('Note deleted successfully');
//         fetchNotes(); // Refresh notes list
//         setActiveView('notes');
//         setSelectedNote(null);
//       } catch (error) {
//         alert('Failed to delete note');
//       }
//     }
//   };

//   // View the full details of a selected note
//   const viewDetails = (note: Note) => {
//     setSelectedNote(note);
//     setActiveView('details');
//   };

//   // Open edit modal with selected note data
//   const handleEdit = (note: Note) => {
//     setSelectedNote(note);
//     setIsEditing(true);
//     showModal();
//   };

//   // Render content based on the active view
//   const renderContent = () => {
//     if (activeView === 'home') {
//       return (
//         <div>
//           <h3>Welcome to the Note Taker Dashboard!</h3>
//           <p>Manage your notes effortlessly.</p>
//           <button className="add-note-button" onClick={showModal}>
//             Add Note
//           </button>
//         </div>
//       );
//     } else if (activeView === 'notes') {
//       return (
//         <div>
//           <h3>All Notes</h3>
//           {notes.length > 0 ? (
//             <div className="notes-grid">
//               {notes.map(note => (
//                 <div className="note-card" key={note._id}>
//                   <h4>{note.title}</h4>
//                   <p>{note.content.slice(0, 50) + '...'}</p>
//                   <div className="note-actions">
//                     <button onClick={() => viewDetails(note)}>View</button>
//                     <button onClick={() => handleEdit(note)}>Edit</button>
//                     <button onClick={() => { setSelectedNote(note); deleteNote(); }}>Delete</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No notes available</p>
//           )}
//         </div>
//       );
//     } else if (activeView === 'details' && selectedNote) {
//       return (
//         <div>
//           <h3>{selectedNote.title}</h3>
//           <p>{selectedNote.content}</p>
//           <button onClick={() => handleEdit(selectedNote)}>Edit</button>
//           <button onClick={deleteNote} style={{ marginLeft: 10 }}>Delete</button>
//           <button onClick={() => setActiveView('notes')} style={{ marginLeft: 10 }}>Back to Notes</button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="sider">
//         <div className="profile">
//           <div className="avatar">U</div> {/* Placeholder for Avatar */}
//           <div className="user-info">
//             <h3>User Name</h3>
//             <p>user@example.com</p>
//           </div>
//         </div>
//         <nav className="menu">
//           <button className={`menu-item ${activeView === 'home' ? 'active' : ''}`} onClick={() => setActiveView('home')}>Home</button>
//           <button className={`menu-item ${activeView === 'notes' ? 'active' : ''}`} onClick={() => setActiveView('notes')}>Notes</button>
//         </nav>
//       </div>
//       <div className="content">
//         <h2>{activeView === 'home' ? 'Home' : activeView === 'notes' ? 'Notes' : 'Note Details'}</h2>
//         {renderContent()}
//       </div>
//       {isModalVisible && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>{isEditing ? "Edit Note" : "Add Note"}</h3>
//             <form onSubmit={(e) => { 
//                 e.preventDefault(); 
//                 const title = (e.target as any).title.value;
//                 const content = (e.target as any).content.value;
//                 addOrEditNote(title, content); 
//               }}>
//               <input type="text" name="title" placeholder="Title" required defaultValue={selectedNote?.title} />
//               <textarea name="content" placeholder="Content" required defaultValue={selectedNote?.content}></textarea>
//               <button type="submit">{isEditing ? 'Save Changes' : 'Add Note'}</button>
//               <button type="button" onClick={closeModal}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './ui/Login';
import Signup from './ui/Signup';
import Dashboard from './ui/Dashboard';

// Placeholder for authentication status
const isAuthenticated = false; // Replace with actual authentication logic

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};


export default App;

