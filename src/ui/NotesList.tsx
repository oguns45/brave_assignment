import React from 'react';

type Note = {
  _id: string;
  title: string;
  content: string;
};

interface NoteListProps {
  notes: Note[];
  onView: (note: Note) => void;
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onView, onEdit, onDelete }) => {
  return (
    <div>
      <h3>All Notes</h3>
      {notes.length > 0 ? (
        <div className="notes-grid">
          {notes.map(note => (
            <div className="note-card" key={note._id}>
              <h4>{note.title}</h4>
              <p>{note.content.slice(0, 50) + '...'}</p>
              <div className="note-actions">
                <button onClick={() => onView(note)}>View</button>
                <button onClick={() => onEdit(note)}>Edit</button>
                <button onClick={() => onDelete(note)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

export default NoteList;
