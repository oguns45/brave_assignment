import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './HomePage';
import Sidebar from './Sidebar';
import NoteList from './NotesList';
import AddNoteModal from './AddNoteModal';
import Settings from './Settings';
import '../index.css';
import Support from './Support';

type Note = {
  _id: string;
  title: string;
  content: string;
};

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'notes' | 'details'| 'Settings' | 'support'>('home');

  const apiBaseUrl = 'http://localhost:5000/api/note';

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(apiBaseUrl);
      setNotes(response.data);
    } catch (error) {
      alert('Failed to fetch notes');
    }
  };

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => {
    setIsModalVisible(false);
    setIsEditing(false);
    setSelectedNote(null);
  };

  const addOrEditNote = async (title: string, content: string) => {
    const values = { title, content };
    if (isEditing && selectedNote) {
      try {
        await axios.put(`${apiBaseUrl}/${selectedNote._id}`, values);
        alert('Note updated successfully');
      } catch (error) {
        alert('Failed to update note');
      }
    } else {
      try {
        await axios.post(apiBaseUrl, values);
        alert('Note added successfully');
        fetchNotes();
      } catch (error) {
        alert('Failed to add note');
      }
    }
    closeModal();
  };

  const deleteNote = async () => {
    if (selectedNote) {
      try {
        await axios.delete(`${apiBaseUrl}/${selectedNote._id}`);
        alert('Note deleted successfully');
        fetchNotes();
        setActiveView('notes');
        setSelectedNote(null);
      } catch (error) {
        alert('Failed to delete note');
      }
    }
  };

  const viewDetails = (note: Note) => {
    setSelectedNote(note);
    setActiveView('details');
  };

  const handleEdit = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(true);
    showModal();
  };

  const renderContent = () => {
    if (activeView === 'home') {
      return <HomePage onAddNote={showModal} />;
    } else if (activeView === 'notes') {
      return (
        <NoteList
          notes={notes}
          onView={viewDetails}
          onEdit={handleEdit}
          onDelete={deleteNote}
        />
      );
    } else if (activeView === 'details' && selectedNote) {
      return (
        <div>
          <h3>{selectedNote.title}</h3>
          <p>{selectedNote.content}</p>
          <button onClick={() => handleEdit(selectedNote)}>Edit</button>
          <button onClick={deleteNote} style={{ marginLeft: 10 }}>Delete</button>
          <button onClick={() => setActiveView('notes')} style={{ marginLeft: 10 }}>Back to Notes</button>
        </div>
      );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar activeView={activeView} onSelect={setActiveView} />
      <div className="content">
        <h2>{activeView === 'home' ? 'Home' : activeView === 'support' ? 'Support': activeView === 'notes' ? 'Notes' : 'Note Details'  }</h2>
        {renderContent()}
      </div>
      <AddNoteModal
        isVisible={isModalVisible}
        isEditing={isEditing}
        selectedNote={selectedNote}
        onSave={addOrEditNote}
        onClose={closeModal}
      />
    </div>
  );
};

export default Dashboard;
