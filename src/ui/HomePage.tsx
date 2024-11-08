import React from 'react';

interface HomePageProps {
  onAddNote: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddNote }) => {
  return (
    <div>
      <h3>Welcome to the Note Taker Dashboard!</h3>
      <p>Manage your notes effortlessly.</p>
      <button className="add-note-button" onClick={onAddNote}>
        Add Note
      </button>
    </div>
  );
};

export default HomePage;
