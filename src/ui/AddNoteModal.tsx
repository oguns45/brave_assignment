import React from 'react';

interface AddNoteModalProps {
  isVisible: boolean;
  isEditing: boolean;
  selectedNote: { title: string; content: string } | null;
  onSave: (title: string, content: string) => void;
  onClose: () => void;
}

const AddNoteModal: React.FC<AddNoteModalProps> = ({ isVisible, isEditing, selectedNote, onSave, onClose }) => {
  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.target as any).title.value;
    const content = (e.target as any).content.value;
    onSave(title, content);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{isEditing ? "Edit Note" : "Add Note"}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" required defaultValue={selectedNote?.title} />
          <textarea name="content" placeholder="Content" required defaultValue={selectedNote?.content}></textarea>
          <button type="submit">{isEditing ? 'Save Changes' : 'Add Note'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddNoteModal;
