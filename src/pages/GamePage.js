import React from 'react';
import TreePlanting from '../components/TreePlanting';

const GamePage = ({ publicKey }) => {
  return (
    <div>
      <h2>Welcome to the Game!</h2>
      <TreePlanting publicKey={publicKey} />
    </div>
  );
};

export default GamePage;